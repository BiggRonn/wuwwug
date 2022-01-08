import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { storage } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqb1TAWH0SAsH2aBj0CNA2bin_Gj8ciSM",
  authDomain: "wuwwug-b2656.firebaseapp.com",
  projectId: "wuwwug-b2656",
  storageBucket: "wuwwug-b2656.appspot.com",
  messagingSenderId: "524540823652",
  appId: "1:524540823652:web:3ae9fdd3ab3567572cb771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getFirestore(app);



 const auth = getAuth();



export {app, auth, projectStorage};