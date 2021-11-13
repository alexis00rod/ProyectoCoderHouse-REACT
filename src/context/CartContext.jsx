import { createContext , useState , useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [cartPriceTotal, setCartPriceTotal] = useState(0)
    const [cartQuantityItems, setCartQuantityItems] = useState(0)

    function addToCartList(items) {
        setCartPriceTotal(cartPriceTotal + (items.quantity * items.detail.price))
        setCartQuantityItems(cartQuantityItems + items.quantity)
        
        const itemIsInCart = cartList.find(item => item.detail.id === items.detail.id)
        if(itemIsInCart){
            itemIsInCart.quantity += items.quantity
        }
        else {
            setCartList([...cartList,items])
        }

    }

    function removeItemToCart(itemToRemove) {
        const findItemToRemove = cartList.find(item => item.detail.id === itemToRemove)

        setCartList(cartList.filter(item => item.detail.id !== itemToRemove))
        setCartPriceTotal(cartPriceTotal - (findItemToRemove.detail.price * findItemToRemove.quantity))
        setCartQuantityItems(cartQuantityItems - findItemToRemove.quantity)
    }

    function emptyCart() {
        setCartList([])
        setCartPriceTotal(0)
        setCartQuantityItems(0)
        
    }

    return (
        <CartContext.Provider value={{cartList, addToCartList, cartPriceTotal, cartQuantityItems, removeItemToCart, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}