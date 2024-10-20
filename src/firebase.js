// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV0hnBkGiQcLyQCXY7D1vOjBEEEGjoVPk",
    authDomain: "med-backend-2cdc8.firebaseapp.com",
    projectId: "med-backend-2cdc8",
    storageBucket: "med-backend-2cdc8.appspot.com",
    messagingSenderId: "72551830034",
    appId: "1:72551830034:web:8dd0790bab9402c265fecb",
    measurementId: "G-BVV5ZJ5BV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db };