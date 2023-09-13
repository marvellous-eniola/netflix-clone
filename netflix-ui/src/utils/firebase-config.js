// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7zfro9WmLX4AAZrfSHFbufZoymEZB74Y",
  authDomain: "react-netflix-clone-a04bf.firebaseapp.com",
  projectId: "react-netflix-clone-a04bf",
  storageBucket: "react-netflix-clone-a04bf.appspot.com",
  messagingSenderId: "370175875160",
  appId: "1:370175875160:web:06cc12815108f14915d22d",
  measurementId: "G-WNDZDGKK8J",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
