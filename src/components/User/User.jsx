import { useState, useEffect } from "react"
import { useUserContext } from "../../context/UserContext"
import { UserOrders } from "./UserOrders"
import { dbCollectionOrders } from "../../services/getFirestone"

export const User = () => {
    const { user } = useUserContext()
    const [historyOrders, setHistoryOrders] = useState([])

    useEffect(() => {
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
