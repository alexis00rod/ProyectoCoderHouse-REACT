import { ItemList } from "./ItemList"

export const ItemListContainer = ({greeting}) => {
    return(
        <section>
            <h2>{greeting}</h2>
            <ul className="itemListContainer">
                <ItemList />
            </ul>
        </section>
    )
}
