import { getFirestore } from '@firebase/firestore';
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // new process to inject data to firebase
  apiKey: "AIzaSyBSX9d6yLCNjK_JWru7qOJCcRiWUCImOcQ",
  authDomain: "disney-plus-clone-2aa6e.firebaseapp.com",
  projectId: "disney-plus-clone-2aa6e",
  storageBucket: "disney-plus-clone-2aa6e.appspot.com",
  messagingSenderId: "399002454574",
  appId: "1:399002454574:web:c04e6aafaf63903b592dbf"
};

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);

export default db;