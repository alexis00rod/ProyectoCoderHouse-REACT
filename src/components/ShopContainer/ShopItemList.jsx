import { ShopItem } from "./ShopItem"

export const ShopItemList = ({items}) => {
    return (
        <ul className="shop-products">
            {
                items.map(item => <ShopItem key={item.id} item={item} />)
            }
        </ul>
    )
}
