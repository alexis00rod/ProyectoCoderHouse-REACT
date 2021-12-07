import { useState, useEffect} from "react"
import { useParams } from "react-router"
import { dbCollectionItems } from "../../services/getFirestone"
import { ItemDetail } from "./ItemDetail"
import { Loader } from "../Loader/Loader"

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()

    useEffect(() => {
        const dbQuery = dbCollectionItems.doc(idProduct).get()
        dbQuery
        .then(resp => setDetail({id:resp.id,...resp.data()}))
        .finally(() => setLoading(false))

    },[idProduct])

    return (
        <>
            { loading ? < Loader/> : <ItemDetail detail={detail} />}
        </>
    )  
}