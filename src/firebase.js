import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaWDY2kxIswcWIrPk5vIUvKwrdbI07KmM",
  authDomain: "my-bazaar-8604b.firebaseapp.com",
  projectId: "my-bazaar-8604b",
  storageBucket: "my-bazaar-8604b.appspot.com",
  messagingSenderId: "639093564172",
  appId: "1:639093564172:web:59b74f73ab5bc766131f29",
  measurementId: "G-B5N48DBMWF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };