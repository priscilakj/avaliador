import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCurk1O9u59u941JsF9HlzABXq0C4RA9Ko",
    authDomain: "avaliador-83255.firebaseapp.com",
    projectId: "avaliador-83255",
    storageBucket: "avaliador-83255.firebasestorage.app",
    messagingSenderId: "976828553565",
    appId: "1:976828553565:web:7241a28f7148f5435df0b4",
    measurementId: "G-MESTR7FX58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);