import { getFirestore } from "../../services/getFirestone"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { SlideItem } from "./SlideItem"

export const Slide = ({category}) => {
    const [categoryItems, setCategoryItems] = useState([])
    const slide = useRef(null)

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection("items").where("category","==",category).limit(7).get()
        dbQuery
        .then(resp => setCategoryItems(resp.docs.map(items => ({
            id: items.id,
            ...items.data()
        }))))

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
    )
}
