import { Link } from "react-router-dom"

export const ShopMenu = () => {
    return (
        <div className="shop-menu">
                <form>
                    <input type="search" name="search" id="search" />
                    <button type="submit"><box-icon name='search' color='#ffffff' ></box-icon></button>
                </form>
                <nav>
                    <h3>Search by category</h3>
                    <Link to="/shop/category/ps2">PS2</Link>
                    <Link to="/shop/category/ps3">PS3</Link>
                    <Link to="/shop/category/xbox360">XBOX360</Link>
                    <h3>Search by type</h3>
                    <Link to="/shop/type/action">Action</Link>
                    <Link to="/shop/type/aventure">Aventure</Link>
                    <Link to="/shop/type/rpg">RPG</Link>
                    <Link to="/shop/type/sport">Sport</Link>
                </nav>
            </div>
    )
}
