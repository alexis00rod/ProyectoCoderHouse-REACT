import React,{ useState } from "react"
import { Link } from "react-router-dom"
import swal from "sweetalert"

export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial)

    const [buttonType, setButtonType] = useState("add")

    const ItemCounter = () => {
        return <div className="item-count">
                    <div className="counter">
                        <button onClick={removeItem}><span className="textColor">-</span></button>
                        <span className="textColor">{count}</span>
                        <button onClick={addItem}><span className="textColor">+</span></button>
                    </div>
                    <button className="btn-primary" onClick={addToCart}><span>Add to Cart</span></button>
                </div>
    }

    const ShowCartButton = () => <button className="btn-primary"><Link to="/cart" >Show Cart</Link></button>

    const addItem = ()=> (count < stock) ? 
    setCount(count + 1) 
    : 
    swal({
        text: "You reached the maximum stock",
        icon: "warning"
    })
    const removeItem = ()=> (count > initial) ? 
    setCount(count - 1) 
    : 
    swal({
        text: "Can not be removed anymore",
        icon: "warning"
    })

    const addToCart = ()=> {
        setButtonType("show")
        onAdd(count)
    }

    return (
        <>
        {
            buttonType === "add" ? <ItemCounter /> : <ShowCartButton />
        }
        </>
    )
}