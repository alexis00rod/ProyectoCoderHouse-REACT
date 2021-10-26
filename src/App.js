import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer";
import "./style/style.css"
import "boxicons"

function App() {
  return (
    <>
        <NavBar />
        <ItemListContainer greeting="Catalogo de productos" />
    </>
  );
}

export default App;
