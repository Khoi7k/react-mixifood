import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALUKbCUw9l1EJwReZHeMVJqHoHOZSrP8o",
  authDomain: "mixifood-6d764.firebaseapp.com",
  databaseURL: "https://mixifood-6d764-default-rtdb.firebaseio.com",
  projectId: "mixifood-6d764",
  storageBucket: "mixifood-6d764.appspot.com",
  messagingSenderId: "838998268428",
  appId: "1:838998268428:web:7ea173902176382cac6c29",
  measurementId: "G-LE1JYC8DPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}

