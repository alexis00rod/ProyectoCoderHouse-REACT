import { useState, useEffect } from "react"
import { UserOrders } from "./UserOrders"
import { dbCollectionUsers } from "../../services/getFirestone"
import { dbCollectionOrders } from "../../services/getFirestone"

export const User = () => {
    const [user, setUser] = useState({})
    const [historyOrders, setHistoryOrders] = useState([])

    useEffect(() => {
        const dbUser = dbCollectionUsers.doc("KUdLRz46NhuYyOBiLp4R").get()
        dbUser
        .then(resp => setUser({id: resp.id, ...resp.data()}))
        const dbUserOrders = dbCollectionOrders.orderBy("date","asc").get()
        dbUserOrders
        .then(resp => setHistoryOrders(resp.docs.map(order => ({
            id: order.id,
            ...order.data()
        }))))
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
                    <div className="user-orders">
                        <h3>My History Orders</h3>
                        <p>{historyOrders.length} purchases</p>
                        <UserOrders orders={historyOrders} />
                    </div>
                </div>
            </div>
        </section>
    )
}
