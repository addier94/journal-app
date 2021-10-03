import 'firebase/firestore'
import 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA5YPhpwjAXUOXgzTNhIZgWHEFwDi4YrMI",
  authDomain: "journal-40926.firebaseapp.com",
  projectId: "journal-40926",
  storageBucket: "journal-40926.appspot.com",
  messagingSenderId: "128149425491",
  appId: "1:128149425491:web:0b1c69cb43da08c148e5a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider()



// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export {
  db,
  googleAuthProvider,
}