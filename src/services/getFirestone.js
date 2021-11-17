import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDfOmI3Ypux1JnF4lSmfhioPFm15zonEts",
    authDomain: "proyectoreact-coderhouse.firebaseapp.com",
    projectId: "proyectoreact-coderhouse",
    storageBucket: "proyectoreact-coderhouse.appspot.com",
    messagingSenderId: "737865384177",
    appId: "1:737865384177:web:1da034a6624560431f6950",
    measurementId: "G-DJZD32GFZD"
}

const products = firebase.initializeApp(firebaseConfig);

export function getFirestore() {    
    return firebase.firestore(products)
}