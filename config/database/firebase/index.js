//firebase
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB57qTCeCdQK9oRJXqqkdTgNKPqpiTMKBg",
    authDomain: "alamrmedice.firebaseapp.com",
    projectId: "alamrmedice",
    storageBucket: "alamrmedice.appspot.com",
    messagingSenderId: "532690975296",
    appId: "1:532690975296:web:24196b3e7cf464b0423da5",
    measurementId: "G-E2RYDT8E72"
  };
  
  const app = initializeApp(firebaseConfig);
  export default app;