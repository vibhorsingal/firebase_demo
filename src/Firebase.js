// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyfqbj6M9QtgUFjdG4dQ5oO2a9qHoCBtg",
    authDomain: "learning-ab584.firebaseapp.com",
    projectId: "learning-ab584",
    storageBucket: "learning-ab584.appspot.com",
    messagingSenderId: "707442406753",
    appId: "1:707442406753:web:6faa6bf25dc9f99a9c0120"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//exports
export const auth = firebase.auth();