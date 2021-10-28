const PRODUCTS = [
    {id: 1,name: "God of War Ascension",img:"./assets/img/GodOfWarAscension-ps3.jpg",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",category:"PS3",price: 2000,stock:5},
    {id: 2,name: "NBA2K18",img:"./assets/img/NBA2K18-ps3.jpg",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",category:"PS3",price: 2000,stock:5},
    {id: 3,name: "Skate3",img:"./assets/img/Skate3-ps3.jpg",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",category:"PS3",price: 2000,stock:5}
]

export const getProducts = new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(PRODUCTS)
    }, 2000);
})
