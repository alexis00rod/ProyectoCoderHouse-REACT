import { useCartContext } from "../../context/CartContext"
import { useState } from "react/cjs/react.development"
import { Link } from "react-router-dom"
import firebase from "firebase"
import "firebase/firestore"
import { getFirestore } from "../../services/getFirestone"
import { CartForm } from "./CartForm"
import { CartItems } from "./CartItems"
import { CartTotal } from "./CartTotal"
import swal from "sweetalert"

export const Cart = () => {
    const { cartList, cartPriceTotal, cartQuantityItems } = useCartContext()
    const [formData, setFormData] = useState({name:"",phone:"",email:"",location:""})
    // const [idOrder, setIdOrder] = useState("")

    const generateOrder = (e) => {
        e.preventDefault()

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = (cartPriceTotal + 4.99).toFixed(2)
        order.items = cartList.map(item => {
            const id = item.detail.id
            const name = item.detail.name
            const quantity = item.quantity
            const price = item.detail.price * item.quantity

            return { id, name, quantity, price }    
        })

        const dbQuery = getFirestore()
        dbQuery.collection("orders").add(order)
        .then(resp => swal({
            title: "Are you sure you want to finalize the purchase?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then(willDelete => {
                if (willDelete) {
                    swal({
                        title: "Your purchase was successful!",
                        text: `Purchase order: ${resp.id}`,
                        icon: "success"
                    });
                }
            })
        )
        // .then(resp => setIdOrder(resp.id))

        const itemsToUpdate = dbQuery.collection("items").where(
            firebase.firestore.FieldPath.documentId(),"in",cartList.map(i => i.detail.id)
        )
        const batch = dbQuery.batch()

        itemsToUpdate.get()
        .then(collection => {
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.detail.id === docSnapshot.id).quantity
                })
            })
            batch.commit()
        })

    }
    
    const getFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    return(
        <section>
            <div className="cartlist">
                <h2 className="textColor">Shopping cart</h2>
                {
                    cartQuantityItems === 0 ?
                    <div className="cartlist-empty">
                        <p>Your cart is empty</p>
                        <button className="btn-primary"><Link to="/shop">Return to the shop</Link></button>
                    </div>
                    :
                    <div className="cartlist-container">
                        <CartForm formData={formData} getFormData={getFormData} generateOrder={generateOrder}/>
                        <div className="cartlist-order">
                            <ul className="cartlist-items">
                                { cartList.map(item => <CartItems item={item}/>) }
                            </ul>
                            {/* <button className="btn-primary"><Link to="/shop">Keep shopping</Link></button> */}
                            <CartTotal />
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}