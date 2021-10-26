import { ItemCount } from "./ItemCount"

export const ItemListContainer = ({greeting}) => {
    return(
        <section>
            <h2>{greeting}</h2>
            <ul className="itemListContainer">
                <li className="itemList">
                    Juego 1
                    <ItemCount stock={5} initial={1}/>
                </li>
            </ul>
        </section>
    )
}
