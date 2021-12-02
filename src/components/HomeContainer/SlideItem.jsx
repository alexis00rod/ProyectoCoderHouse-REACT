import { Link } from "react-router-dom"

export const SlideItem = ({items}) => {
    return (
        <li className="item">
            <Link to={`/shop/product/${items.id}`}>
                <div className="item-img">
                    <img src={items.img} alt={items.name} />
                </div>
                <div className="item-main">
                    <h3>{items.name}</h3>
                    <h4><span>US$</span>{items.price}</h4>
                    <h5>{items.type}</h5>
                </div>
            </Link>
        </li>
    )
}
