import { ItemCount } from "./ItemCount"

export const ItemDetail = ({detail}) => {
    return (
        <>
            <div className="itemDetail">
                <p><span>{detail.category}</span><span>{detail.type}</span>{detail.description}</p> 
                <h4>${detail.price}</h4>
            </div>
            <ItemCount stock={detail.stock} initial={1}/>
        </>
    )  
  }