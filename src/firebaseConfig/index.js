// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH73NU3U_rI8yQTtv9SGyUrFQJw3U9XgM",
  authDomain: "workplace02.firebaseapp.com",
  projectId: "workplace02",
  storageBucket: "workplace02.appspot.com",
  messagingSenderId: "71324247251",
  appId: "1:71324247251:web:1138f834b5dc6016e96026",
  measurementId: "G-GFBYN1QM6M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Authentication
export const auth = getAuth(app);
// Initialize firebase Database
export const db = getFirestore(app);
// Initialize Storage
export const storage = getStorage(app);
