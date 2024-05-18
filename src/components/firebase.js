// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpDOhyGmm7NfV3M8zM5aiTf_fL3J_hS_Q",
  authDomain: "indivue-c0b2e.firebaseapp.com",
  projectId: "indivue-c0b2e",
  storageBucket: "indivue-c0b2e.appspot.com",
  messagingSenderId: "565687545927",
  appId: "1:565687545927:web:1b51558e312178d6bd0162",
  measurementId: "G-96VDYLE5H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;