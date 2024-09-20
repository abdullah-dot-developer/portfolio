import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ60ktt7M3BGocQTIFMxRBpxhKEqXfimA",
  authDomain: "portfolio-35989.firebaseapp.com",
  projectId: "portfolio-35989",
  storageBucket: "portfolio-35989.appspot.com",
  messagingSenderId: "582214455419",
  appId: "1:582214455419:web:349826781473c57a1bd2de",
  measurementId: "G-NKY47FWXQ8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
