// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Rb3s7fxAKHoANzhURL1zauDNoO3ksg4",
  authDomain: "netflixgpt-2b3f0.firebaseapp.com",
  projectId: "netflixgpt-2b3f0",
  storageBucket: "netflixgpt-2b3f0.firebasestorage.app",
  messagingSenderId: "407083819995",
  appId: "1:407083819995:web:9ee03ad9caf7e12f10fdfe",
  measurementId: "G-QDFLQV9C0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);