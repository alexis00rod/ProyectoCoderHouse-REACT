import { useState } from "react/cjs/react.development"
import { dbCollectionItems } from "../services/getFirestone"
import firebase from "firebase"
import "firebase/firestore"


export const AddProduct = () => {
    const [productToAdd, setProductToAdd] = useState({})

    const addProductToDB = (e) => {
        e.preventDefault()
        dbCollectionItems.add(productToAdd)

        console.log(`Product add!`)

    }

    const changeAddProduct = (e) => {
        setProductToAdd({
            ...productToAdd,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            [e.target.name]: e.target.value
        })

    }

    return (
        <section>
            <form onChange={changeAddProduct} onSubmit={addProductToDB}>
                <legend>Add Product</legend>
                <div className="add-input">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" value={productToAdd.name} />
                </div>
                <div className="add-input">
                    <label htmlFor="category">category</label>
                    <input type="text" name="category" id="category" value={productToAdd.category} />
                </div>
                <div className="add-input">
                    <label htmlFor="imgIcon">imgIcon</label>
                    <input type="text" name="imgIcon" id="imgIcon" value={productToAdd.imgIcon} />
                </div>
                <div className="add-input">
                    <label htmlFor="price">price</label>
                    <input type="text" name="price" id="price" value={productToAdd.price} />
                </div>
                <div className="add-input">
                    <label htmlFor="type">type</label>
                    <input type="text" name="type" id="type" value={productToAdd.type} />
                </div>
                <div className="add-input">
                    <label htmlFor="video">video</label>
                    <input type="text" name="video" id="video" value={productToAdd.video} />
                </div>
                <div className="add-input">
                    <label htmlFor="imgBanner">imgBanner</label>
                    <input type="text" name="imgBanner" id="imgBanner" value={productToAdd.imgBanner} />
                </div>
                <div className="add-input">
                    <label htmlFor="stock">stock</label>
                    <input type="text" name="stock" id="stock" value={productToAdd.stock} />
                </div>
                <div className="add-input">
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" id="description" value={productToAdd.description} />
                </div>
                <button type="submit">Add product</button>
            </form>
        </section>
    )
}
