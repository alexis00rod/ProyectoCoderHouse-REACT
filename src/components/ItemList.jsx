import { Item } from './Item';

export const ItemList = ({product})=>{

    return (
        <>
            {product.map((p)=> <Item key={p.id} item={p} />)}
        </>
    )
        
}