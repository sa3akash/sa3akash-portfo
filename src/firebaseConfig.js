import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZj-A-KYHB6ud20ZMuPmW0wPrwllR1Rqc",
  authDomain: "portfolio-f9a87.firebaseapp.com",
  databaseURL: "https://portfolio-f9a87-default-rtdb.firebaseio.com",
  projectId: "portfolio-f9a87",
  storageBucket: "portfolio-f9a87.appspot.com",
  messagingSenderId: "10220256",
  appId: "1:10220256:web:9453c5c639a05f33861685",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
