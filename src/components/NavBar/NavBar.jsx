import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../Cart/CartWidget"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/"><span className="textColor">Game</span>Shop</Link></h1>
            <ul className="navbar-menu">
                <li><NavLink to="/" activeClassName="link-active">Home</NavLink></li>
                <li><NavLink to="/shop" activeClassName="link-active">Shop</NavLink></li>
                <li><NavLink to="/shop/category/ps2" activeClassName="link-active">PS2</NavLink></li>
                <li><NavLink to="/shop/category/ps3" activeClassName="link-active">PS3</NavLink></li>
                <li><NavLink to="/shop/category/xbox360" activeClassName="link-active">XBOX 360</NavLink></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}
