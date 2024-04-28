// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBlrw4W3I-OdZkgnChcGcKpTtz8k7sLyY",
  authDomain: "mindscape-3fa4e.firebaseapp.com",
  projectId: "mindscape-3fa4e",
  storageBucket: "mindscape-3fa4e.appspot.com",
  messagingSenderId: "751567463970",
  appId: "1:751567463970:web:46816790136240cb994c7b",
  measurementId: "G-MCWJ73TZG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
