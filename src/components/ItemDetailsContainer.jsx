import { useState, useEffect} from "react"
import { useParams } from "react-router"
import { getFirestore } from "../services/getFirestone"
import { ItemDetail } from "./ItemDetail"
import { Loader } from "./Loader"

export const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { idDetail } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection("items").doc(idDetail).get()

        dbQuery
        .then(resp => setDetail({id:resp.id,...resp.data()}))
        .finally(() => setLoading(false))

    },[idDetail])

    return (
        <>
            { loading ? < Loader/> : <ItemDetail detail={detail} />}
        </>
    )  
}