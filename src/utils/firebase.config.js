
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "react-netflix-clone-9ee95.firebaseapp.com",
  projectId: "react-netflix-clone-9ee95",
  storageBucket: "react-netflix-clone-9ee95.appspot.com",
  messagingSenderId: "985590479232",
  appId: "1:985590479232:web:cb03718fdd68190c72e965",
  measurementId: "G-8CKYFY2D82"
};
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);