import { Link } from "react-router-dom"
import { getFirestore } from "../../services/getFirestone"
import { useState, useEffect } from "react"

export const Banner = () => {
    const [banner, setBanner] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection("items").get()
        dbQuery
        .then(resp => setBanner(resp.docs[0].data()))

    },[])

    return (
        <div className="banner">
            <img src={banner.imgBanner} alt="" />
            <div className="banner-info">
                <h2 className="textColor">Buy games easily and safely.</h2>
                {/* <button className="btn__primary"><Link to="/shop" >See catalog</Link></button> */}
                <button className="btn-primary"><Link to="/shop" >See catalog</Link></button>
            </div>
        </div>
    )
}
