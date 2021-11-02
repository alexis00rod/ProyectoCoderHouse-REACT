const PRODUCTS = [
    {id: 1,name: "God of War Ascension",img:"./assets/img/GodOfWarAscension-ps3.jpg",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",category:"PS3",price: 2000,stock:5,type:"Action"},
    {id: 2,name: "NBA2K18",img:"./assets/img/NBA2K18-ps3.jpg",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",category:"PS3",price: 2000,stock:5,type:"Sport"},
    {id: 3,name: "Skate3",img:"./assets/img/Skate3-ps3.jpg",description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",category:"PS3",price: 2000,stock:5,type:"Sport"}
]

export const getProducts = new Promise ((res,rej) => {
    setTimeout(() => {
        res(PRODUCTS)
    }, 2000);
})

export const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(PRODUCTS[0]);
    }, 2000);
})