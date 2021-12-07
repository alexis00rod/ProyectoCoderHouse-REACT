import { createContext, useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { dbCollectionUsers } from "../services/getFirestone"

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [historyOrders, setHistoryOrders] = useState([])

    useEffect(() => {
        const dbUser = dbCollectionUsers.doc("KUdLRz46NhuYyOBiLp4R").get()
        dbUser
        .then(resp => setUser({id: resp.id, ...resp.data()}))

        const dbUserOrders = dbCollectionUsers.doc("KUdLRz46NhuYyOBiLp4R").collection("orders").orderBy("date","asc").get()
        dbUserOrders
        .then(resp => setHistoryOrders(resp.docs.map(order => ({
            id: order.id,
            ...order.data()
        }))))
        .catch(error => console.log(`error`, error))

    },[historyOrders])


    return (
        <UserContext.Provider value={{user, historyOrders}}>
            {children}
        </UserContext.Provider>
    )
}
