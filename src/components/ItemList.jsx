import {useState} from 'react';
import { getProducts } from '../services/getProducts';
import { Item } from './Item';

export const ItemList = ()=>{
    const [product, setProduct] = useState([])

    getProducts
    .then((res) => setProduct(res))

    return (
        <>
        {product.map((p)=> <Item key={p.id} item={p} />)}
        </>
    )
        
}