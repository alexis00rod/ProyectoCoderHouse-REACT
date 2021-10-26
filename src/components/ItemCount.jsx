import React,{ useState } from "react"

export const ItemCount = ({ stock , initial })=>{
    const [count, setCount] = useState(initial)

    const addItem = ()=> {
        (count < stock) ? setCount(count + 1) : alert("Alcanzo el maximo de stock")
    } 
    const removeItem = ()=> {
        (count > initial) ? setCount(count - 1) : alert("No se puede remover mas")
    }
    const onAdd = ()=>{
        alert(`Se agregaron ${count} productos al carrito.`)
    }
    
    return (
        <>
        <div className="itemCount">
            <div className="itemCount__counter">
                <button onClick={removeItem}>-</button>
                <span>{count}</span>
                <button onClick={addItem}>+</button>
            </div>
            <button onClick={onAdd} className="btn">Agregar al carrito</button>
        </div>
        </>
    )
}