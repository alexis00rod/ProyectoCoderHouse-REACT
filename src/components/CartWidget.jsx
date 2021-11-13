import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

export const CartWidget = () => {
    const { cartQuantityItems } = useCartContext()

    return(
        <button className="btn__cart">
            <Link to="/cart">
                <box-icon name='cart-alt' color='#ffffff' ></box-icon>
                {
                    cartQuantityItems === 0 ? "" : <span>{cartQuantityItems}</span>
                }
            </Link>
        </button>
    )
}