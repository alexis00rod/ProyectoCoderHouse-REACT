import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1><Link to="/"><span>Game</span>Shop</Link></h1>
            <ul className="NavBar__menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/ps2">PS2</Link></li>
                <li><Link to="/category/ps3">PS3</Link></li>
                <li><Link to="/category/xbox360">XBOX 360</Link></li>
                <li><CartWidget /></li>
            </ul> 
        </nav>
    )
}
