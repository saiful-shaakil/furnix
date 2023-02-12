import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_apiKey,
  authDomain: process.env.FIREBASE_APP_authDomain,
  projectId: process.env.FIREBASE_APP_projectId,
  storageBucket: process.env.FIREBASE_APP_storageBucket,
  messagingSenderId: process.env.FIREBASE_APP_messagingSenderId,
  appId: process.env.FIREBASE_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
