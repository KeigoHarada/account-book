// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuX9TZ9NCRT1lqPWkuxuH6Szx6qdcEvEY",
    authDomain: "account-book-83ab1.firebaseapp.com",
    projectId: "account-book-83ab1",
    storageBucket: "account-book-83ab1.appspot.com",
    messagingSenderId: "438005463386",
    appId: "1:438005463386:web:57b10fb85d05b4e4f75b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;