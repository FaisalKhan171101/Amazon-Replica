import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfff6BdPXl3_PoV5eS4-W6GZCKQTT1b1E",
  authDomain: "clone-67e8c.firebaseapp.com",
  projectId: "clone-67e8c",
  storageBucket: "clone-67e8c.appspot.com",
  messagingSenderId: "642483244122",
  appId: "1:642483244122:web:6f99ee346176bc88e61c63",
  measurementId: "G-T8CFEYYZF0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };