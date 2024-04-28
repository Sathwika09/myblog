// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e56a3.firebaseapp.com",
  projectId: "mern-blog-e56a3",
  storageBucket: "mern-blog-e56a3.appspot.com",
  messagingSenderId: "961138908222",
  appId: "1:961138908222:web:141dd0765480f6e4dc056f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);