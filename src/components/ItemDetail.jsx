import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({detail}) => {
    const [quantity, setQuatity] = useState(1)

    const onAdd = (quantityToAdd) => {
        setQuatity(quantityToAdd)
        alert(`THE PRODUCT WAS ADDED TO THE CART: \nName: ${detail.name}\nCategory: ${detail.category}\nQuantity: ${quantityToAdd}\nTotal Price: $${quantityToAdd * detail.price}`)
    }

    return (
        <>
            <div className="itemDetail">
                <Link to="/" className="btn__closeDetail"><box-icon name='left-arrow-alt' ></box-icon></Link>
                <div className="itemDetail__body">
                    <img src={`../assets/img/${detail.img}`} alt={detail.name} />
                    <div className="itemDetail__header-main">
                        <h2>{detail.name}</h2>
                        <h3><span>US$</span>{detail.price}</h3>
                        <h4>
                            <Link to={`/category/${detail.category}`}>{detail.category}</Link>
                            <Link to={`/type/${detail.type}`}>{detail.type}</Link>
                            </h4>
                        <p>{detail.description}</p>
                        <div className="itemCount">
                            <ItemCount product={detail} stock={detail.stock} initial={quantity} onAdd={onAdd}/>
                        </div>
                    </div>  
                </div>
                <iframe width="560" height="315" src={detail.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )  
  }