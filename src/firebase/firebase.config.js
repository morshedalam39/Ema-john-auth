// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFy54uzPzVf6yIbROcMWKmGtpha40VDmE",
  authDomain: "ema-john-firebase-auth-e6d6f.firebaseapp.com",
  projectId: "ema-john-firebase-auth-e6d6f",
  storageBucket: "ema-john-firebase-auth-e6d6f.appspot.com",
  messagingSenderId: "436407449939",
  appId: "1:436407449939:web:bf44efc4708c718af589a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;