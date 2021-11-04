import { Link } from "react-router-dom"

export const CartWidget = () => {
    return(
        <Link to="/cart"><box-icon name='cart-alt' color='#ffffff' ></box-icon></Link>
    )
}