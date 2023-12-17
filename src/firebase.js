// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgjGn2kN7tAR_ZVrha7unZPPoL_Jh2SAs",
  authDomain: "disney-clone-1347d.firebaseapp.com",
  projectId: "disney-clone-1347d",
  storageBucket: "disney-clone-1347d.appspot.com",
  messagingSenderId: "453157918033",
  appId: "1:453157918033:web:526aab4ebd11cc87346f70",
  measurementId: "G-06PLBY1E58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
export default db;
