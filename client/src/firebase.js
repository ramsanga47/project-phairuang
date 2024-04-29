// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "phairuang-c34f4.firebaseapp.com",
  projectId: "phairuang-c34f4",
  storageBucket: "phairuang-c34f4.appspot.com",
  messagingSenderId: "720440608113",
  appId: "1:720440608113:web:e6d431de9ec51cf26c62d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);