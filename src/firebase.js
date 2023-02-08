import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAF1Ua7Xf00XyKeJI0Erj3roTQYTWhYUXI",
    authDomain: "delta-informatica-bd8b1.firebaseapp.com",
    projectId: "delta-informatica-bd8b1",
    storageBucket: "delta-informatica-bd8b1.appspot.com",
    messagingSenderId: "1043856742775",
    appId: "1:1043856742775:web:46f20459dbb9e725f1e972"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataBase = firebase.firestore();




