import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount"

export const ItemDetail = ({detail}) => {
    const [quantity, setQuatity] = useState(1)
    const { addToCartList } = useCartContext()

    const onAdd = (quantityToAdd) => {
        setQuatity(quantityToAdd)
        addToCartList({detail, quantity: quantityToAdd})
    }

    return (
        <>
        <div className="detail-bg">
            <img src={detail.imgBanner} alt="" />
        </div>
        <section>
            <div className="item-detail">
                <Link to="/shop"><box-icon name='left-arrow-alt' ></box-icon></Link>
                <div className="detail-body">
                    <div className="detail-header">
                        <h2>{detail.name}</h2>
                        <p><span>{detail.category}</span><span>{detail.type}</span></p>
                    </div>
                    <div className="detail-main">
                        <iframe width="560" height="315" src={detail.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="detail-description">
                            <div className="detail-product">
                                <div className="product-price">
                                    <h3 className="textColor"><span>US$</span>{detail.price}</h3>
                                    {
                                        detail.stock >= 1 ? <ItemCount product={detail} stock={detail.stock} initial={quantity} onAdd={onAdd} /> : <p>No stock available</p>
                                    }
                                </div>
                                <img src={detail.imgIcon} alt="" />
                            </div>
                            <p>{detail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )  
}