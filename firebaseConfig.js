import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import "firebase/auth"
import "firebase/firestore";



const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER,
  appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
