// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIem6eyBsKmCI5RgRWyGeOwDoMECbFwYY",
  authDomain: "coder-react-proyecto.firebaseapp.com",
  projectId: "coder-react-proyecto",
  storageBucket: "coder-react-proyecto.appspot.com",
  messagingSenderId: "957921363834",
  appId: "1:957921363834:web:039dc3331a96e9cd0cb8c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);