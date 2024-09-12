// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu1BSi1uJe6PjTwWZJ5kRT6XDLVHmPXSk",
    authDomain: "kivara-12028.firebaseapp.com",
    projectId: "kivara-12028",
    storageBucket: "kivara-12028.appspot.com",
    messagingSenderId: "192642618574",
    appId: "1:192642618574:web:736a6a1ede4ca704e6ec9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth(app)

export {db, app, storage, auth}