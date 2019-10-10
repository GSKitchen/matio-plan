import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCV6snLT_7tsKXZNf0rgnPJdZpzU0VMp0E",
  authDomain: "my-marioplan-4e29d.firebaseapp.com",
  databaseURL: "https://my-marioplan-4e29d.firebaseio.com",
  projectId: "my-marioplan-4e29d",
  storageBucket: "my-marioplan-4e29d.appspot.com",
  messagingSenderId: "530249029507",
  appId: "1:530249029507:web:a6ae6bdda30183544a48b6",
  measurementId: "G-548GS09TK6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});
firebase.analytics();

export default firebase;
