// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDIcdSoHg4yOQKWjwIKESRGIdGQbqJwtfY",
    authDomain: "myproject-10d1e.firebaseapp.com",
    projectId: "myproject-10d1e",
    storageBucket: "myproject-10d1e.firebasestorage.app",
    messagingSenderId: "312133889606",
    appId: "1:312133889606:web:d1267502243267927ae447",
    measurementId: "G-HZ8Z45H5WB"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);