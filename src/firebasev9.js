// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvpOpEQqDnzem-fDUSoCgxfe9bLZPZurA",
  authDomain: "desney-clone-575a3.firebaseapp.com",
  projectId: "desney-clone-575a3",
  storageBucket: "desney-clone-575a3.appspot.com",
  messagingSenderId: "230722723752",
  appId: "1:230722723752:web:48c5e7ff64141b6f5b079d"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);