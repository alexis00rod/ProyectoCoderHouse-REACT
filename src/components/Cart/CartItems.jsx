import { useCartContext } from "../../context/CartContext"

export const CartItems = ({item}) => {
    const { removeItemToCart } = useCartContext()

    return (
        <li className="cartlist-item">
            <img src={item.detail.imgIcon} alt={item.detail.name} />
            <div className="item-data">
                <h3>{item.detail.name}</h3>
                <h4>US${item.detail.price} <span>x {item.quantity}</span></h4>
            </div>
            <button onClick={() => removeItemToCart(item.detail.id)} className="btn-tertiary"><box-icon name='trash-alt' color='#ffffff' ></box-icon></button>
        </li>
    )
}
