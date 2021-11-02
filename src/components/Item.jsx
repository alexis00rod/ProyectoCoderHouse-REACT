import { ItemDetailsContainer } from "./ItemDetailsContainer"

export const Item = ({item})=>{
    return (
        <li className="item">
            <h3>{item.name}</h3>
            <img src={item.img} alt={item.name} />
            <ItemDetailsContainer key={item.id} />
        </li>
    )
}
