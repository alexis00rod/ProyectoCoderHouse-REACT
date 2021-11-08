import { Link } from "react-router-dom"

export const Item = ({item})=>{
    return (
        <li className="item">
            <Link to={`/detail/${item.id}`}>
                <div className="item__img">
                    <img src={`../assets/img/${item.img}`} alt={item.name} />
                </div>
                <div className="item__description">
                    <h3>{item.name}</h3>
                    <h4><span>US$</span>{item.price}</h4>
                </div>
            </Link>
        </li>
        
    )
}
