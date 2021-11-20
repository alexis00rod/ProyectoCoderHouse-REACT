import { useCartContext } from "../context/CartContext"
import { useState } from "react/cjs/react.development"
import { Link } from "react-router-dom"
import firebase from "firebase"
import "firebase/firestore"
import { getFirestore } from "../services/getFirestone"
import { CartTotal } from "./CartTotal"
import { CartForm } from "./CartForm"
import { CartItems } from "./CartItems"
import swal from "sweetalert"

export const Cart = () => {
    const { cartList, cartPriceTotal, cartQuantityItems, emptyCart } = useCartContext()
    const [formData, setFormData] = useState({name:"",phone:"",email:"",location:""})

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

            return {id,name,quantity,price}
        })

        const dbQuery = getFirestore()
        dbQuery.collection("orders").add(order)
        .then(resp => {
            swal({
                icon: "success",
                title: "Your purchase was successful!",
                text: `Your ID Order is: ${resp.id}`
            })
        })
        .finally(() => {
            emptyCart()
        })

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
        <div className="cartList">
            <h2>Shopping cart</h2>
            {
                cartQuantityItems === 0 ?
                <div className="cartListContainer__empty">
                    <p>Your cart is empty</p>
                    <button className="btn__primary"><Link to="/">Return to the shop</Link></button>
                </div>
                :
                <div className="cartListContainer">
                    <ul className="cartListContainer__items">
                        { cartList.map(item => <CartItems item={item}/>) }
                        <li>
                            <button className="btn__primary"><Link to="/">Keep shopping</Link></button>
                        </li>
                    </ul>
                    <div className="cartListContainer__checkout">
                        <CartForm formData={formData} getFormData={getFormData}/>
                        <CartTotal generateOrder={generateOrder}/>
                    </div> 
                </div>
            }
        </div>
    )
}