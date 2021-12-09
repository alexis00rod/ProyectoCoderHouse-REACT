export const Order = ({order}) => {

    return (
        <tr>
            <td>
                <p>{order.date.toDate().getDate()}/{order.date.toDate().getMonth()}/{order.date.toDate().getFullYear()}</p>
            </td>
            <td>
                <p>{order.items.length} items</p>
            </td>
            <td>
                <h4>US${order.total}</h4>
            </td>
        </tr>
    )
}
