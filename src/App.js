import { useState } from "react";
import ScrollRestoration from "react-scroll-restoration"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { HomeContainer } from "./components/HomeContainer/HomeContainer";
import { ShopContainer } from "./components/ShopContainer/ShopContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";
import { User } from "./components/User/User"
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { AddProduct } from "./components/AddProduct";
import "./style/style.css";
import "boxicons";


function App() {
    const [scroll, setScroll] = useState(false)

    const changeNavbarColor = () => {
        window.scrollY >= 80 ? setScroll(true) : setScroll(false)
    }

    window.addEventListener("scroll",changeNavbarColor)

    return (
        <>
        <UserContextProvider>
        <CartContextProvider>
            <BrowserRouter>
                <NavBar scroll={scroll} />
                <ScrollRestoration />
                <Switch>
                <Route exact path="/" component={HomeContainer} />
            <main>
                <Route exact path="/shop" component={ShopContainer} />
                <Route exact path="/shop/category/:idCategory" component={ShopContainer}/>
                <Route exact path="/shop/product/:idProduct" component={ItemDetailContainer} />
                <Route exact path="/addProduct" component={AddProduct} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/user" component={User} />
            </main>
                </Switch>
            <footer>
                <Footer />
            </footer>
            </BrowserRouter>
        </CartContextProvider>
        </UserContextProvider>
        </>
    );
}

export default App;
