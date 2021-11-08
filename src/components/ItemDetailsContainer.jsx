import { useState, useEffect} from "react"
import { useParams } from "react-router"
import { getProducts } from "../services/getProducts"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailsContainer = () => {
    const [detail, setDetail] = useState({})
    const {idDetail} = useParams()

    useEffect(() => {
        getProducts
        .then(res => setDetail(res.find(p => p.id === parseInt(idDetail))))
    },[idDetail])

    return (
        <>
            <ItemDetail detail={detail} />
        </>
    )  
}