import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuS6G4uVNyZ5d_OuZxGke-Zt2O9FWv0LM",
    authDomain: "ju-query.firebaseapp.com",
    projectId: "ju-query",
    storageBucket: "ju-query.appspot.com",
    messagingSenderId: "428826178800",
    appId: "1:428826178800:web:738c7fb671bfe3a0497e35",
    measurementId: "G-VM96DER123"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider();

const db = firebaseApp.firestore();

export {auth, provider, providerFb};
export default db;