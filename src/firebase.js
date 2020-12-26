import * as firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD1Fhwi3SbEWn3fO3nI1325s7Pa2NuW19w",
  authDomain: "glegleg-id.firebaseapp.com",
  projectId: "glegleg-id",
  storageBucket: "glegleg-id.appspot.com",
  messagingSenderId: "480707259310",
  appId: "1:480707259310:web:772348efca0db11a91f63f",
  measurementId: "G-8G2XH9WXF7",
};

firebase.initializeApp(config);
const db = firebase.firestore();

export function createOrder() {}
