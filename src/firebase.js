// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4-GC8OWjH6_7YlmsF6eiINgInyStI18Q",
  authDomain: "bazza-food.firebaseapp.com",
  projectId: "bazza-food",
  storageBucket: "bazza-food.appspot.com",
  messagingSenderId: "705146916353",
  appId: "1:705146916353:web:242e1ec30a82d7d7fb7a00",
  measurementId: "G-NL1MGDMKYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);