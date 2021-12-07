import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { ShopItemList } from "./ShopItemList"
import { Loader } from "../Loader/Loader"

import { dbCollectionItems } from "../../services/getFirestone"

export const ShopContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        const dbQuery = idCategory ? 
        dbCollectionItems.where("category","==",idCategory).get() 
        :
        dbCollectionItems.get()

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
