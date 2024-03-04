import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTyiugt2z9jfmovlz4GQpiM1Q9dZch-lM",
  authDomain: "reactjsfirebase-da504.firebaseapp.com",
  projectId: "reactjsfirebase-da504",
  storageBucket: "reactjsfirebase-da504.appspot.com",
  messagingSenderId: "433882469885",
  appId: "1:433882469885:web:f1d17459a1f04e4ffcb594",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
