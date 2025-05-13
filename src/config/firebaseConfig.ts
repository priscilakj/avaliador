import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCByacqfbC9-ISdQIJJD7D0hTSCiD0LVU",
  authDomain: "avaliador2-39ec4.firebaseapp.com",
  projectId: "avaliador2-39ec4",
  storageBucket: "avaliador2-39ec4.firebasestorage.app",
  messagingSenderId: "956383625001",
  appId: "1:956383625001:web:17dd8604b9c2b307cb0138",
  measurementId: "G-JVKX0032LT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
