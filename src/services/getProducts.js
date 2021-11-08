const PRODUCTS = [
    {
        id: 1,
        name: "God of War Ascension",
        img:"GodOfWarAscension-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 15,
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
        price: 15,
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
        price: 15,
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
        price: 5,
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
        price: 5,
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
        price: 5,
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
        price: 5,
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
        price: 5,
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
        price: 5,
        stock:5,
        type:"Sport",
        video:"https://www.youtube.com/embed/QV7PK8AVEKA"
    },
    {
        id: 10,
        name: "Naruto Shippuden Ultimate Ninja Storm Revolution",
        img:"NarutoShippudenUltimateNinjaStormRevolution-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 15,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/yhP1YJzQDYQ"
    },
    {
        id: 11,
        name: "Watch Dogs",
        img:"WatchDogs-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 15,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/DqoQG_XYF-8"
    },
    {
        id: 12,
        name: "Injustice Gods Among Us Ultimate Edition",
        img:"Injustice-GodsAmongUsUltimateEdition-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 15,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/h1l8c5ZllNc"
    },
    {
        id: 13,
        name: "Call Of Duty Ghost",
        img:"CallOfDutyGhost-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 15,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/Zxnx3W-HA18"
    },
    {
        id: 14,
        name: "The Last of Us",
        img:"TheLastOfUs-ps3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps3",
        price: 15,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/QGZM9bAB1_4"
    },
    {
        id: 15,
        name: "WWE SmackDown Vs RAW 2011",
        img:"WWESmackDownVsRAW2011-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 5,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/ky2Qvq2rmys"
    },
    {
        id: 16,
        name: "Call Of Duty World At War",
        img:"CallOfDutyWorldAtWar-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 5,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/ondfCsioE0E"
    },
    {
        id: 17,
        name: "Bolt",
        img:"Bolt-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 5,
        stock:5,
        type:"Aventure",
        video:"https://www.youtube.com/embed/TD6Ay6ClLXA"
    },
    {
        id: 18,
        name: "Tiger Woods PGA Tour 09",
        img:"TigerWoodsPGATour09-ps2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"ps2",
        price: 5,
        stock:5,
        type:"Sport",
        video:"https://www.youtube.com/embed/YTngnqmBSsY"
    },
    {
        id: 19,
        name: "Metal Gear Solid 5",
        img:"MetalGearSolid5-xbox360.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"xbox360",
        price: 5,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/H7MDcK5TMQA"
    },
    {
        id: 20,
        name: "Sniper Elite III",
        img:"SniperEliteIII-xbox360.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"xbox360",
        price: 5,
        stock:5,
        type:"Action",
        video:"https://www.youtube.com/embed/nsHcLZGQ81s"
    },
    {
        id: 21,
        name: "Diablo III",
        img:"DiabloIII-xbox360.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category:"xbox360",
        price: 5,
        stock:5,
        type:"RPG",
        video:"https://www.youtube.com/embed/gB95D6VcOYA"
    }
]

export const getProducts = new Promise ((res,rej) => {
    setTimeout(() => {
        res(PRODUCTS)
    }, 2000);
})

