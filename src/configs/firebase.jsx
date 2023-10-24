import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyC2MXTIFE0RBPfQH9hts_ugnXzP4aNMqLY",
    authDomain: "elton-de-oliveira.firebaseapp.com",
    projectId: "elton-de-oliveira",
    storageBucket: "elton-de-oliveira.appspot.com",
    messagingSenderId: "807464646619",
    appId: "1:807464646619:web:3af18a6a9019aedd2699fe",
    measurementId: "G-G9PE3XGGBG"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default firebaseConfig;
