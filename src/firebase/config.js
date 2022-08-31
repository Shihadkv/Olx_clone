import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB54rPHFeb7Dz7ihbO0X8nxLG-4TeefIR8",
    authDomain: "olxclone-7ac1a.firebaseapp.com",
    projectId: "olxclone-7ac1a",
    storageBucket: "olxclone-7ac1a.appspot.com",
    messagingSenderId: "1016471703282",
    appId: "1:1016471703282:web:99ff63a9c2c1aa14d88a6b",
    measurementId: "G-J8XX6F5H34"
  };


 export default firebase.initializeApp(firebaseConfig)