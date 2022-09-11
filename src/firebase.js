import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRYLNqhtmfJYx20g-NAuI6_Os8GGBNkoo",
  authDomain: "chatapp-44ca8.firebaseapp.com",
  projectId: "chatapp-44ca8",
  storageBucket: "chatapp-44ca8.appspot.com",
  messagingSenderId: "883468183035",
  appId: "1:883468183035:web:c82db875c31d1fd869975e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
