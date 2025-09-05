// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3THd8hrVt-sguPOo37v9HIgIGS52wOfk",
  authDomain: "netflixgpt-aae30.firebaseapp.com",
  projectId: "netflixgpt-aae30",
  storageBucket: "netflixgpt-aae30.firebasestorage.app",
  messagingSenderId: "515099912941",
  appId: "1:515099912941:web:ab748970d3aa313170bae4",
  measurementId: "G-LNRKXBYTNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();