export const Order = ({purchase}) => {

    return (
        <tr>
            <td>
                <p>{purchase.date.toDate().getDate()}/{purchase.date.toDate().getMonth()}/{purchase.date.toDate().getFullYear()}</p>
            </td>
            <td>
                <ul className="order-items">
                    {purchase.items.map(item => <li key={item.id}>{item.name}({item.quantity})</li>)}
                </ul>
            </td>
            <td>
                <h4>US${purchase.total}</h4>
            </td>
        </tr>
    )
}
