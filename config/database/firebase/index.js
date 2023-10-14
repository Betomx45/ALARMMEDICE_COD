//firebase
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    // Clave de Beto
    // apiKey: "AIzaSyB57qTCeCdQK9oRJXqqkdTgNKPqpiTMKBg",
    // authDomain: "alamrmedice.firebaseapp.com",
    // projectId: "alamrmedice",
    // storageBucket: "alamrmedice.appspot.com",
    // messagingSenderId: "532690975296",
    // appId: "1:532690975296:web:24196b3e7cf464b0423da5",
    // measurementId: "G-E2RYDT8E72"

    //Clave de Marcus
    apiKey: "AIzaSyAXhGUEuJVNbAdhlyREPNU_YFjx3nMWR4s",
    authDomain: "fb-crud-b0ce7.firebaseapp.com",
    projectId: "fb-crud-b0ce7",
    storageBucket: "fb-crud-b0ce7.appspot.com",
    messagingSenderId: "649491295576",
    appId: "1:649491295576:web:3de7a1fc62edcae3b0092d"
  };
  
  const app = initializeApp(firebaseConfig);
  export default app;