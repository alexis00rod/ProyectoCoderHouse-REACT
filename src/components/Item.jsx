import { ItemCount } from "./ItemCount"
import { ItemList } from "./ItemList"

export const Item = ({item})=>{
    return (
        <li className="item">
            <img src={item.img} alt={item.name} />
            <div className="item__main">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>Stock disponible: {item.stock}</span>
                <h4>${item.price}</h4>
            </div>
            <ItemCount stock={item.stock} initial={1} />
        </li>
    )
}