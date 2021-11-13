import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export const Cart = () => {
    const { cartList, cartPriceTotal, cartQuantityItems, removeItemToCart, emptyCart } = useCartContext()

    return(
        <div className="cartList">
            <h2>Shopping cart</h2>
            {
                cartQuantityItems === 0 ?
                <div className="cartListContainer__empty">
                    <p>Your cart is empty</p>
                    <button className="btn__primary"><Link to="/">Return to the shop</Link></button>
                </div>
                :
                <div className="cartListContainer">
                    <ul className="cartListContainer__items">
                        {
                            cartList.map(item => 
                                <li className="cartList__item">
                                    <img src={`../assets/img/${item.detail.img}`} alt={item.detail.name} />
                                    <div className="cartList__item-body">
                                        <h3>{item.detail.name}</h3>
                                        <button onClick={() => removeItemToCart(item.detail.id)}>Remove</button>
                                    </div>
                                    <h5><span>US${item.detail.price} </span>x{item.quantity} items</h5>
                                    <h4>TOTAL: <span>US${item.quantity * item.detail.price}</span></h4>
                                </li>
                            )
                        }
                        <li>
                            <button className="btn__primary"><Link to="/">Keep shopping</Link></button>
                        </li>
                    </ul>
                    <ul className="cartListContainer__checkout">
                        <li>
                            <h4>Items: <i>x{cartQuantityItems}</i><span>US${cartPriceTotal}</span></h4>
                        </li>
                        <li>
                            <h4>Delivery: <span>US$4.99</span></h4>
                        </li>
                        <li>
                            <h3>Order total: <span>US${(cartPriceTotal + 4.99).toFixed(2)}</span></h3>
                        </li>
                        <li className="cartListContainer__checkout-controls">
                            <button className="btn__secondary" onClick={() => emptyCart()}>Delete cart</button>
                            <button className="btn__primary">Proceed to checkout</button>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}