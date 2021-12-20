import { createContext, useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { dbCollectionUsers } from "../services/getFirestone"

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const dbUser = dbCollectionUsers.doc("KUdLRz46NhuYyOBiLp4R").get()
        dbUser
        .then(resp => setUser({id: resp.id, ...resp.data()}))

    },[])


    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}
