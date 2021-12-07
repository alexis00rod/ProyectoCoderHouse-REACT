import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCwIxzkEOS-IaDYvTl3mjJTdrKmUvdvSm0",
    authDomain: "reactapp-coderhouse-3e962.firebaseapp.com",
    projectId: "reactapp-coderhouse-3e962",
    storageBucket: "reactapp-coderhouse-3e962.appspot.com",
    messagingSenderId: "1047427626524",
    appId: "1:1047427626524:web:0d4ac2b59dbf30e96451d9",
    measurementId: "G-23K4992HK4"
};

const products = firebase.initializeApp(firebaseConfig);

export function getFirestore() {    
    return firebase.firestore(products)
}

export const dbCollectionItems = getFirestore().collection("items")
export const dbCollectionUsers = getFirestore().collection("users")
export const dbCollectionOrders = getFirestore().collection("users").doc("KUdLRz46NhuYyOBiLp4R").collection("orders")
