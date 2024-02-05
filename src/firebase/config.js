// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDayxXsKVunzdSgPD7epX9I3dyY3osgFiE",
  authDomain: "rj-29910-coder.firebaseapp.com",
  projectId: "rj-29910-coder",
  storageBucket: "rj-29910-coder.appspot.com",
  messagingSenderId: "700112222206",
  appId: "1:700112222206:web:b9909f29ea0e3f1bd572af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
