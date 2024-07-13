import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'





const firebaseConfig = {
  apiKey: "AIzaSyAviNk3k4fEPUq4pWE0ZVjczzXZlWpdsHM",
  authDomain: "quiz-app-8b272.firebaseapp.com",
  projectId: "quiz-app-8b272",
  storageBucket: "quiz-app-8b272.appspot.com",
  messagingSenderId: "255813043788",
  appId: "1:255813043788:web:b456af957157f831bd56e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification 
}