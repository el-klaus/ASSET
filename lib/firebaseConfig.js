// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbSbaYqcT9TX-s4pITZKxyhTRkaMyKnlo",
  authDomain: "echo-investment.firebaseapp.com",
  projectId: "echo-investment",
  projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
  storageBucket: "echo-investment.firebasestorage.app",
  messagingSenderId: "870707258645",
  appId: "1:870707258645:web:551149e3a67addfd70b51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
export const auth = getAuth(app);
