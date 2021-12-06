import { useCartContext } from "../../context/CartContext"

export const CartTotal = () => {
    const { cartPriceTotal, cartQuantityItems } = useCartContext()

    return (
        <div className="cartlist-total">
            <p>Items: <span className="textColor"><i>x{cartQuantityItems}</i>US${cartPriceTotal}</span></p>
            <p>Delivery: <span className="textColor">US$4.99</span></p>
            <p>Order total: <span className="textColor">US${(cartPriceTotal + 4.99).toFixed(2)}</span></p>
        </div>
    )
}
