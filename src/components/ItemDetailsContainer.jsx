import { useState, useEffect} from "react"
import { getItem } from "../services/getProducts"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailsContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        getItem
        .then(res => setProduct(res))
    })

    return (
        <>
            <ItemDetail detail={product}/>
        </>
    )  
}