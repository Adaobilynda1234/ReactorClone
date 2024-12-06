// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDedH0_Kd57qI6G2kBMOqDxG69Y9IFlIik",
  authDomain: "realtorapp-d173e.firebaseapp.com",
  projectId: "realtorapp-d173e",
  storageBucket: "realtorapp-d173e.firebasestorage.app",
  messagingSenderId: "466920490823",
  appId: "1:466920490823:web:180183dc45255346292e62"
};


// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
