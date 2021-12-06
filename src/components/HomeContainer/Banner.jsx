import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { dbCollectionItems } from "../../services/getFirestone"
import { Loader } from "../Loader/Loader"

export const Banner = () => {
    const [loading, setLoading] = useState(true)
    const [banner, setBanner] = useState({})

    useEffect(() => {
        const dbQuery = dbCollectionItems.get()
        dbQuery
        .then(resp => setBanner(resp.docs[0].data()))
        .finally(() => setLoading(false))

    },[])

    return (
        <>
        {
            loading ? 
            <Loader /> 
            :
            <div className="banner">
                <img src={banner.imgBanner} alt="" />
                <div className="banner-info">
                    <h2 className="textColor">Buy games easily and safely.</h2>
                    <button className="btn-primary"><Link to="/shop" >See catalog</Link></button>
                </div>
            </div> 
        }
        </>
    )
}
