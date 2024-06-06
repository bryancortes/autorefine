// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "autorefine-35354.firebaseapp.com",
  projectId: "autorefine-35354",
  storageBucket: "autorefine-35354.appspot.com",
  messagingSenderId: "424841691212",
  appId: "1:424841691212:web:713b9a62c8a80f626c34e9",
  measurementId: "G-ZSDR3EDDMK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);