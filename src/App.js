import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer";
import "./style/style.css"
import "boxicons"

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Catalogo de productos" /> 
      </main>
    </>
  );
}

export default App;
