// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBybW70v-RQyWg-2rskind6hpvJPnm9hEE",
  authDomain: "fir-login-b5727.firebaseapp.com",
  projectId: "fir-login-b5727",
  storageBucket: "fir-login-b5727.appspot.com",
  messagingSenderId: "250017989323",
  appId: "1:250017989323:web:9939b59cfc2add4df7514e",
  measurementId: "G-8N25578101",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
