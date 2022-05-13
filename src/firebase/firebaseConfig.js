// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6fvH9TtfUdzpYu5BRfg7aXIEzvHfcio",
    authDomain: "blogproject-aa582.firebaseapp.com",
    projectId: "blogproject-aa582",
    storageBucket: "blogproject-aa582.appspot.com",
    messagingSenderId: "181508189953",
    appId: "1:181508189953:web:9ce5d24444e9901de6f500",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// firestore
export const db = getFirestore(app);