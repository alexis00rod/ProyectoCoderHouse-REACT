import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore } from "../services/getFirestone"
import { ItemList } from "./ItemList"
import { Loader } from "./Loader"

export const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    const { idType } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        
        if(idCategory) {
            const dbQuery = db.collection("items").where("category","==",idCategory).get()
            dbQuery
            .then(resp => setProduct(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .finally(() => setLoading(false))
        } else {
            const dbQuery = db.collection("items").get()
            dbQuery
            .then(resp => setProduct(resp.docs.map(item => ({id: item.id, ...item.data()}))))
            .finally(() => setLoading(false))
        }
    },[idCategory])

    useEffect(()=>{
        const db = getFirestore()
        
        if(idType) {
            const dbQuery = db.collection("items").where("type","==",idType).get()
            dbQuery
            .then(resp => setProduct(resp.docs.map(p => ({id: p.id, ...p.data()}))))
            .finally(() => setLoading(false))
            
        } else {
            const dbQuery = db.collection("items").get()
            dbQuery
            .then(resp => setProduct(resp.docs.map(p => ({id: p.id, ...p.data()}))))
            .finally(() => setLoading(false))
        }
    },[idType])

    return(
        <ul className="itemListContainer">
            { loading ? <Loader /> : <ItemList product={product} /> }
        </ul>
    )
}
