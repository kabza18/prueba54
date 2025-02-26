// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "true-eye-383521.firebaseapp.com",
    projectId: "true-eye-383521",
    storageBucket: "true-eye-383521.appspot.com",
    messagingSenderId: "150371747970",
    appId: "1:150371747970:web:39c9e09dc1b636a3bb4c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
