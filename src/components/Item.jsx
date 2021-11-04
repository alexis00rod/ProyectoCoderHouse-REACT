import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"

export const Item = ({item})=>{
    return (
        <li className="item">
            <div className="item__header">
                <h3>{item.name}</h3>
                <img src={`../assets/img/${item.img}`} alt={item.name} />
            </div>
            <div className="item__main">
                <Link to={`/detail/${item.id}`}>See product</Link>
                <ItemCount initial={1} stock={item.stock} />
            </div>
        </li>
    )
}
