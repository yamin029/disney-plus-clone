import { getFirestore } from '@firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyDvpOpEQqDnzem-fDUSoCgxfe9bLZPZurA",
  // authDomain: "desney-clone-575a3.firebaseapp.com",
  // projectId: "desney-clone-575a3",
  // storageBucket: "desney-clone-575a3.appspot.com",
  // messagingSenderId: "230722723752",
  // appId: "1:230722723752:web:19866b36fbc0867a5b079d"

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

export default db;