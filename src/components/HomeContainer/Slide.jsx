import { dbCollectionItems } from "../../services/getFirestone"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { SlideItem } from "./SlideItem"
import { Loader } from "../Loader/Loader"

export const Slide = ({category}) => {
    const [loading, setLoading] = useState(true)
    const [categoryItems, setCategoryItems] = useState([])
    const slide = useRef(null)

    useEffect(() => {
        const dbQuery = dbCollectionItems.where("category","==",category).limit(7).get()
        dbQuery
        .then(resp => setCategoryItems(resp.docs.map(items => ({
            id: items.id,
            ...items.data()
        }))))
        .finally(() => setLoading(false))

    },[category])

    const slideLeftClick = (e) => {
        e.preventDefault()
        slide.current.scrollLeft -= slide.current.offsetWidth
    }

    const slideRightClick = (e) => {
        e.preventDefault()
        slide.current.scrollLeft += slide.current.offsetWidth
    }

    return (
        <>
        {
            loading ?
            <Loader />
            :
            <li className="slide-category">
                <div className="slide-header">
                    <h3 className="textColor"><span>{category}</span>Games</h3>
                        <button className="btn-secondary"><Link to={`/shop/category/${category}`} className="textColor">See all</Link></button>
                </div>
                <ul className="slide" ref={slide}>
                    {
                        categoryItems.map(item => <SlideItem items={item} key={item.id}/>)
                    }
                </ul>
                <button onClick={slideLeftClick} className="btn-tertiary slide-left"><box-icon name='chevron-left' color='#ffffff' ></box-icon></button>
                <button onClick={slideRightClick} className="btn-tertiary slide-right"><box-icon name='chevron-right' color='#ffffff' ></box-icon></button>
            </li>
        }
        </>
        
    )
}
