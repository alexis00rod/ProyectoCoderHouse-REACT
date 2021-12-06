import { getFirestore } from "../../services/getFirestone"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { ShopItemList } from "./ShopItemList"
import { Loader } from "../Loader/Loader"

export const ShopContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = idCategory ? 
        db.collection("items").where("category","==",idCategory).get() 
        :
        db.collection("items").get()

        dbQuery
        .then(resp => setProducts(resp.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))))
        .finally(() => {
            setLoading(false)
        })

    },[idCategory])

    return (
        <section>
            {
                loading ? <Loader /> : <ShopItemList items={products} />
            }
        </section>
    )
}
