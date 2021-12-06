import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeContainer } from "./components/HomeContainer/HomeContainer";
import { ShopContainer } from "./components/ShopContainer/ShopContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import "./style/style.css";
import "boxicons";
import { AddProduct } from "./components/AddProduct";

function App() {
    return (
        <>
        <CartContextProvider>
            <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <main>
                <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/shop" component={ShopContainer} />
                <Route exact path="/shop/category/:idCategory" component={ShopContainer}/>
                <Route exact path="/shop/product/:idProduct" component={ItemDetailContainer} />
                <Route exact path="/addProduct" component={AddProduct} />
                <Route exact path="/cart" component={Cart} />
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
            </BrowserRouter>
        </CartContextProvider>
        </>
    );
}

export default App;
