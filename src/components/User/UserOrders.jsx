import { useEffect, useState } from "react"
import { dbCollectionOrders } from "../../services/getFirestone"
import { Order } from "./Order"

export const UserOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const dbUserOrders = dbCollectionOrders.orderBy("date","asc").get()
        dbUserOrders
        .then(resp => setOrders(resp.docs.map(order => ({
            id: order.id,
            ...order.data()
        }))))
        .catch(err => console.log(`error`, err))
    },[])

    return (
        <div className="user-orders">
            <h3>Total purchases({orders.length})</h3>
            <table className="orders">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <Order purchase={order} key={order.id} />)
                }
                </tbody>
            </table>
        </div>
    )
}
