// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWH8wgxn_AOLXdkUbXyHkqcyQ4DKW7X80",
  authDomain: "task-manger-challange.firebaseapp.com",
  projectId: "task-manger-challange",
  storageBucket: "task-manger-challange.firebasestorage.app",
  messagingSenderId: "675298761601",
  appId: "1:675298761601:web:5c7612425619ac5aa52680",
  measurementId: "G-ZVRDZMSZL1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);