import { Order } from "./Order"

export const UserOrders = ({orders}) => {
    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Total</th>
            </tr>
            {
                orders.map(order => <Order order={order} key={order.id} />)
            }
        </table>
    )
}
