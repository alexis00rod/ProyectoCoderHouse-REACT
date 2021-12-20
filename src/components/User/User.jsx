import { useState, useEffect } from "react"
import { UserOrders } from "./UserOrders"
import { dbCollectionUsers } from "../../services/getFirestone"

export const User = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const dbUser = dbCollectionUsers.doc("KUdLRz46NhuYyOBiLp4R").get()
        dbUser
        .then(resp => setUser({id: resp.id, ...resp.data()}))
        .catch(err => console.log(`error`, err))

    }, [])

    return (
        <section>
            <div className="user-container">
                <div className="user">
                    <div className="user-img">
                        <img src={user.imgProfile} alt="" />
                    </div>
                    <p>{user.name}</p>
                </div>
                <div className="user-data">
                    <UserOrders />
                </div>
            </div>
        </section>
    )
}
