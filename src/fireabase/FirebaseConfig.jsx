// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUedOQEPnTmwFTDM5mkQ9hKVw0ns0a2O0",
  authDomain: "myfirstapp-c4ffc.firebaseapp.com",
  projectId: "myfirstapp-c4ffc",
  storageBucket: "myfirstapp-c4ffc.appspot.com",
  messagingSenderId: "531896720329",
  appId: "1:531896720329:web:362821b6af614ad4a7a618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB,auth}