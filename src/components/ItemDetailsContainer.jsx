import { useState, useEffect} from "react"
import { useParams } from "react-router"
import { getProducts } from "../services/getProducts"
import { ItemDetail } from "./ItemDetail"
import { Loader } from "./Loader"

export const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const {idDetail} = useParams()

    useEffect(() => {
        getProducts
        .then(res => setDetail(res.find(p => p.id === parseInt(idDetail))))
        .finally(() => setLoading(false))
    },[idDetail])

    return (
        <>
            { loading ? <Loader /> : <ItemDetail detail={detail} /> }
        </>
    )  
}