// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvT8x6riximcvk47JP_few4xAPhQL9cIc",
  authDomain: "login-signup-9d2ea.firebaseapp.com",
  projectId: "login-signup-9d2ea",
  storageBucket: "login-signup-9d2ea.firebasestorage.app",
  messagingSenderId: "157049855653",
  appId: "1:157049855653:web:f6989be8b4c44b183fb74c",
  measurementId: "G-NSJHT0EDE3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);