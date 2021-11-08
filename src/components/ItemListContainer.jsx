import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../services/getProducts"
import { ItemList } from "./ItemList"
import { Loader } from "./Loader"

export const ItemListContainer = ({greeting}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    const { idType } = useParams()

    useEffect(()=>{
        if(idCategory) {
            getProducts
            .then(res => setProduct(res.filter(p => p.category === idCategory)))
            .finally(() => setLoading(false))
        } else {
            getProducts
            .then(res => setProduct(res))
            .finally(() => setLoading(false))
        }
    },[idCategory])

    useEffect(()=>{
        if(idType) {
            getProducts.then(res => setProduct(res.filter(p => p.type === idType)))
        } else {
            getProducts.then(res => setProduct(res))
        }
    },[idType])
    
    return(
        <ul className="itemListContainer">
            { loading ? <Loader /> : <ItemList product={product} /> }
        </ul>
    )
}
