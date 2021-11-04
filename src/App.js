import { NavBar } from "./components/NavBar"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { Cart } from "./components/Cart";
import "./style/style.css"
import "boxicons"

function App() {
    return (
    <>
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            <Switch>
                <main>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route exact path="/category/:idCategory" component={ItemListContainer}/>
                    <Route exact path="/detail/:idDetail" component={ItemDetailsContainer} />
                    <Route exact path="/cart" component={Cart} />
                </main>
            </Switch>
        </BrowserRouter>

    </>
    );
}

export default App;
