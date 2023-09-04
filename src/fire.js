import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtmwbqjG8xqCNSmr9MkcMjL9mL0ONin4Y",
    authDomain: "linkedin-clone-dd3f0.firebaseapp.com",
    projectId: "linkedin-clone-dd3f0",
    storageBucket: "linkedin-clone-dd3f0.appspot.com",
    messagingSenderId: "615298439965",
    appId: "1:615298439965:web:7bd648a5f2378694a91ff4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
