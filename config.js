import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDx_DN871Vsq8wwuJdruAy27UVkuuT9-iw",
    authDomain: "c71eridestage.firebaseapp.com",
    projectId: "c71eridestage",
    storageBucket: "c71eridestage.appspot.com",
    messagingSenderId: "894032442278",
    appId: "1:894032442278:web:e7311bc9a1f2bbc5dcd567"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
