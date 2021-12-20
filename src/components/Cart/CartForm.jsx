import { useCartContext } from "../../context/CartContext"

export const CartForm = ({ formData, getFormData, generateOrder }) => {
    const { emptyCart } = useCartContext()

    return (
        <form onSubmit={generateOrder} onChange={getFormData} className="cartlist-form">
            <legend className="textColor">Enter your personal data</legend>
            <div className="form-input">
                <label htmlFor="name">Full name:</label>
                <span>
                    <input type="text" name="name" defaultValue={formData.name} placeholder="Your full name" required />
                </span>
            </div>
            <div className="form-input">
                <label htmlFor="phone">Phone number:</label>
                <span>
                    <input type="text" name="phone" defaultValue={formData.phone} placeholder="Your email address" required />
                </span>
            </div>
            <div className="form-input">
                <label htmlFor="email">Email address:</label>
                <span>
                    <input type="text" name="email" defaultValue={formData.email} placeholder="Your phone number" required />
                </span>
            </div>
            <div className="form-input">
                <label htmlFor="location">Location:</label>
                <span>
                    <input type="text" name="location" defaultValue={formData.location} placeholder="Your location" required />
                </span>
            </div>
            <div className="form-submit">
                <button className="btn-secondary" onClick={() => emptyCart()}>Delete cart</button>
                <button className="btn-primary" type="submit"><span>Finalize purchase</span></button>
            </div>
        </form>
    )
}
