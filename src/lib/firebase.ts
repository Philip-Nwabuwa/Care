import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ43SwjxDhXx5jYuPVei4RmsuPoWs1wSo",
  authDomain: "carefinder-db.firebaseapp.com",
  projectId: "carefinder-db",
  storageBucket: "carefinder-db.appspot.com",
  messagingSenderId: "1065353021456",
  appId: "1:1065353021456:web:87470c0842f0f4f9d5a295",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
