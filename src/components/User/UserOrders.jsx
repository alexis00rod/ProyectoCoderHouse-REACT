import { Order } from "./Order"

export const UserOrders = ({orders}) => {
    return (
        <ul>
            {
                orders.map(order => <Order order={order} key={order.id} />)
            }
        </ul>
    )
}
