// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIdNpACUCOnkiUX2roNlN0x6PquDv9FM8",
  authDomain: "echo-pro.firebaseapp.com",
  projectId: "echo-pro",
  storageBucket: "echo-pro.firebasestorage.app",
  messagingSenderId: "986695661933",
  appId: "1:986695661933:web:93612846baa389656bc264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}


