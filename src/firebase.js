// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDTVTBd24GnOxOLZ6XruTn4-1zmSS5gus",
  authDomain: "myhealth-auth-dev.firebaseapp.com",
  projectId: "myhealth-auth-dev",
  storageBucket: "myhealth-auth-dev.appspot.com",
  messagingSenderId: "405357576166",
  appId: "1:405357576166:web:0ab37fcfda9edad7b9a027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


