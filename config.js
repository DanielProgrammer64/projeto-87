// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7LbX3MLtx4j2PQ3oQ8IqMI8YPcHrbsRA",
  authDomain: "projetodocorvo87.firebaseapp.com",
  databaseURL: "https://projetodocorvo87-default-rtdb.firebaseio.com",
  projectId: "projetodocorvo87",
  storageBucket: "projetodocorvo87.appspot.com",
  messagingSenderId: "794760351003",
  appId: "1:794760351003:web:6770c26afb6c481b6ad7be",
  measurementId: "G-ZG6F3K1412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);