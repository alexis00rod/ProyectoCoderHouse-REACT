import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1><span>Game</span>Shop</h1>
            <ul className="NavBar__menu">
                <li className="NavBar__menu-item">
                    <span>PS3</span>
                    <ul className="NavBar__dropdown-menu">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Best Seller</a></li>
                        <li><a href="#">Offer</a></li>
                    </ul>
                </li>
                <li className="NavBar__menu-item">
                    <span>PS4</span>
                    <ul className="NavBar__dropdown-menu">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Best Seller</a></li>
                        <li><a href="#">Offer</a></li>
                    </ul>
                </li>
                <li className="NavBar__menu-item">
                    <span>PS5</span>
                    <ul className="NavBar__dropdown-menu">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Best Seller</a></li>
                        <li><a href="#">Offer</a></li>
                    </ul>
                </li>
                <li className="NavBar__menu-item">
                    <CartWidget />
                </li>
            </ul>
            
        </nav>
    )
}
