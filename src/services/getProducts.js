const PRODUCTS = [
    {
        id: 1,
        name: "God of War Ascension",
        img:"GodOfWarAscension-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 2000,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/1aDhfTGkLTg"
    },
    {
        id: 2,
        name: "NBA2K18",
        img:"NBA2K18-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 2000,
        stock:5,
        type:"Sport",
        video:"https://www.youtube.com/embed/FmA1TcfmUtM"
    },
    {
        id: 3,
        name: "Skate3",
        img:"Skate3-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 2000,
        stock:5,
        type:"Sport",
        video:"https://www.youtube.com/embed/DezPszE_qvI"
    },
    {
        id: 4,
        name: "Bakugan Battle Brawlers",
        img:"BakuganBattleBrawlers-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 2000,
        stock:5,
        type:"Aventure",
        video:"https://www.youtube.com/embed/iyxOyXmhyAA"
    },
    {
        id: 5,
        name: "Prince Of Persia The Sands Of Time",
        img:"PrinceOfPersia-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 2000,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/eeoqc2d4CUM"
    },
    {
        id: 6,
        name: "Ben 10 Alien Force Vilgax Attacks",
        img:"Ben10AlienForceVilgaxAttacks-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 2000,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/O8jWOJhZS78"
    },
    {
        id: 7,
        name: "Batman Arkham City",
        img:"BatmanArkhamCity-xbox360.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"xbox360",
        price: 2000,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/muCtJsy-d9w"
    },
    {
        id: 8,
        name: "Assassin’s Creeds 3",
        img:"AssassinsCreed3-xbox360.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"xbox360",
        price: 2000,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/YS8-Rd4NDdA"
    },
    {
        id: 9,
        name: "FIFA 18",
        img:"Fifa18-xbox360.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"xbox360",
        price: 2000,
        stock:5,
        type:"Sport",
        video:"https://www.youtube.com/embed/QV7PK8AVEKA"
    }
]


export const getProducts = new Promise ((res,rej) => {
    setTimeout(() => {
        res(PRODUCTS)
    }, 2000);
})
