import { ShopItem } from "./ShopItem"

export const ShopItemList = ({items}) => {
    return (
        <ul className="shop-products">
            {
                items.map(item => <ShopItem key={item.key} item={item} />)
            }
        </ul>
    )
}
