export const CartForm = ({formData, getFormData}) => {
    return (
        <form onChange={getFormData}>
            <legend>Enter your personal data</legend>
            <label htmlFor="name">Full name:</label>
            <input type="text" name="name" value={formData.name} placeholder="Your full name" />
            <label htmlFor="phone">Phone number:</label>
            <input type="text" name="phone" value={formData.phone} placeholder="Your email address" />
            <label htmlFor="email">Email address:</label>
            <input type="text" name="email" value={formData.email} placeholder="Your phone number" />
            <label htmlFor="location">Location:</label>
            <input type="text" name="location" value={formData.location} placeholder="Your location" />
        </form>
    )
}
