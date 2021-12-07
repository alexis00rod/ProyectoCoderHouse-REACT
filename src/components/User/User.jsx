import { useUserContext } from "../../context/UserContext"
import { UserOrders } from "./UserOrders"

export const User = () => {
    const {user, historyOrders} = useUserContext()

    return (
        <section>
            <div className="user-container">
                <div className="user">
                    <div className="user-img">
                        <img src={user.imgProfile} alt="" />
                    </div>
                    <p>{user.name}</p>
                </div>
                <div className="user-data">
                    <div className="user-orders">
                        <h3>My History Orders</h3>
                        <p>{historyOrders.length} purchases</p>
                        <UserOrders orders={historyOrders} />
                    </div>
                </div>
            </div>
        </section>
    )
}
