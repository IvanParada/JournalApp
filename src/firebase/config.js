// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx5HEGpcr_XEt2fjJrxYDuFeEeajvx52Y",
    authDomain: "journal-app-react-2041f.firebaseapp.com",
    projectId: "journal-app-react-2041f",
    storageBucket: "journal-app-react-2041f.appspot.com",
    messagingSenderId: "1081696906828",
    appId: "1:1081696906828:web:fddf780780cca35fb80ee9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);