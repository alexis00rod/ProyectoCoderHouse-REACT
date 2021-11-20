import { useCartContext } from "../context/CartContext"

export const CartTotal = ({generateOrder}) => {
    const { cartPriceTotal, cartQuantityItems, emptyCart } = useCartContext()

    return (
        <ul>
            <li>
                <h4>Items: <i>x{cartQuantityItems}</i><span>US${cartPriceTotal}</span></h4>
            </li>
            <li>
                <h4>Delivery: <span>US$4.99</span></h4>
            </li>
            <li>
                <h3>Order total: <span>US${(cartPriceTotal + 4.99).toFixed(2)}</span></h3>
            </li>
            <li className="cartListContainer__checkout-controls">
                <button className="btn__secondary" onClick={() => emptyCart()}>Delete cart</button>
                <button className="btn__primary" onClick={generateOrder}>Proceed to checkout</button>
            </li>
        </ul>
    )
}
