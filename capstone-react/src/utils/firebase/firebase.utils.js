import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdU2pQBMYVG3WO_zpKk1s_WBCi-sSwfhM",
  authDomain: "capstone-db-25d10.firebaseapp.com",
  projectId: "capstone-db-25d10",
  storageBucket: "capstone-db-25d10.appspot.com",
  messagingSenderId: "920176446981",
  appId: "1:920176446981:web:27cee9184d5c0ada2ad66c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth,provider);