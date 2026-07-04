import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJjaa4sLaj8TAWEzVyF9KlKLejRn9cVFw",
  authDomain: "uni-pay-eb481.firebaseapp.com",
  projectId: "uni-pay-eb481",
  storageBucket: "uni-pay-eb481.firebasestorage.app",
  messagingSenderId: "145334725425",
  appId: "1:145334725425:web:803889a2131a0d1e0a1e10",
  measurementId: "G-Y3F328CVXF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
