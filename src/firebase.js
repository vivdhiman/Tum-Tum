import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBftT986DHcbLrL4-MzITEsAQLyjqVorZA",
    authDomain: "fir-bbfe5.firebaseapp.com",
    databaseURL: "https://fir-bbfe5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-bbfe5",
    storageBucket: "fir-bbfe5.appspot.com",
    messagingSenderId: "823965448096",
    appId: "1:823965448096:web:da5a5e969f1df55334d6c5",
    measurementId: "G-VP2901LEWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };