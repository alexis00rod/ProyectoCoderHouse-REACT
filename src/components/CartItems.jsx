import { useCartContext } from "../context/CartContext"

export const CartItems = ({item}) => {
    const { removeItemToCart } = useCartContext()

    return (
        <li className="cartList__item">
            <img src={`../assets/img/${item.detail.img}`} alt={item.detail.name} />
            <div className="cartList__item-body">
                <h3>{item.detail.name}</h3>
                <button onClick={() => removeItemToCart(item.detail.id)}>Remove</button>
            </div>
            <h5>US${item.detail.price}<span>x{item.quantity} items</span></h5>
            <h4>TOTAL: <span>US${item.quantity * item.detail.price}</span></h4>
        </li>
    )
}
