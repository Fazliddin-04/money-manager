// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTX-xwBGWjP_V0toUdWc2eFVGEn77KHj0",
  authDomain: "wallet-app-a6986.firebaseapp.com",
  projectId: "wallet-app-a6986",
  storageBucket: "wallet-app-a6986.appspot.com",
  messagingSenderId: "867736338351",
  appId: "1:867736338351:web:96a8d2954198b5e4b5b95a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const authentication = getAuth(app);
