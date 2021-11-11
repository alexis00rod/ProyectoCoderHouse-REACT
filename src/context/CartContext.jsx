import { createContext , useState , useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addToCartList(items) {
        const itemIsInCart = cartList.find(item => item.detail.id === items.detail.id)

        if(itemIsInCart){
            itemIsInCart.quantity += items.quantity
            setCartList(cartList)
        }
        else {
            setCartList([...cartList,items])
        }

    }

    console.log("CartList: ",cartList)

    return (
        <CartContext.Provider value={{cartList, addToCartList}}>
            {children}
        </CartContext.Provider>
    )
}