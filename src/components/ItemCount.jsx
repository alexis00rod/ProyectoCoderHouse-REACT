import React,{ useState } from "react"
import { Link } from "react-router-dom"

export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial)

    const [buttonType, setButtonType] = useState("add")

    const AddToCartButton = () => <button className="btn__primary" onClick={addToCart}>Add to Cart</button>
    const ShowCartButton = () => <button className="btn__primary"><Link to="/cart" >Show Cart</Link></button>

    const addItem = ()=> (count < stock) ? setCount(count + 1) : alert("Alcanzo el maximo de stock")
    const removeItem = ()=> (count > initial) ? setCount(count - 1) : alert("No se puede remover mas")

    const addToCart = ()=> {
        setButtonType("show")
        onAdd(count)
    }

    
    return (
        <div className="itemCount">
            <div className="itemCount__counter">
                <button onClick={removeItem}>-</button>
                <span>{count}</span>
                <button onClick={addItem}>+</button>
            </div>
            { buttonType === "add" ? <AddToCartButton /> : <ShowCartButton />}
        </div>
    )
}