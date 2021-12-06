import { Link } from "react-router-dom"

export const ShopItem = ({item}) => {
    return (
        <li className="item">
            <Link to={`/shop/product/${item.id}`}>
                <div className="item-img">
                    <img src={item.imgIcon} alt={item.name} />
                </div>
                <div className="item-main">
                    <h3>{item.name}</h3>
                    <h4><span>US$</span>{item.price}</h4>
                    <h5>{item.type}</h5>
                </div>
            </Link>
        </li>
    )
}
