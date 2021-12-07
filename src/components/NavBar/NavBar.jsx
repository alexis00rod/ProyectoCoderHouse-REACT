import { Link } from "react-router-dom"
import { CartWidget } from "../Cart/CartWidget"
import { useUserContext } from "../../context/UserContext"
import { useEffect } from "react/cjs/react.development"

export const NavBar = ({scroll}) => {
    const { user } = useUserContext()

    useEffect(() => {

    },[])

    return (
        <header className={scroll ? "scroll-active" : ""}>
            <nav className="navbar">
                <h1><Link to="/"><span className="textColor">Game</span>Shop</Link></h1>
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/shop/category/ps2">PS2</Link></li>
                    <li><Link to="/shop/category/ps3">PS3</Link></li>
                    <li><Link to="/shop/category/xbox360">XBOX 360</Link></li>
                </ul>
                <ul className="navbar-user">
                    <li><CartWidget /></li>
                    <li className="user-profile">
                        <Link to="/user">
                            <img src={user.imgProfile} alt="" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
