// Importing "firebase" object from firebase npm package
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore

// firebaseConfig contains all the information of developer API keys and database IDs to access the developer console from firebase
const firebaseConfig = {
    apiKey: "AIzaSyDuS6G4uVNyZ5d_OuZxGke-Zt2O9FWv0LM",
    authDomain: "ju-query.firebaseapp.com",
    projectId: "ju-query",
    storageBucket: "ju-query.appspot.com",
    messagingSenderId: "428826178800",
    appId: "1:428826178800:web:738c7fb671bfe3a0497e35",
    measurementId: "G-VM96DER123"
  };


// Initializing the firebase App using given configurations
const firebaseApp=firebase.initializeApp(firebaseConfig);

// Accessing firebase authentication service by creating "auth" object using a method from firebase object
const auth=firebase.auth()

// Accessing Google OAuth service using firebase object
const googleProvider= new firebase.auth.GoogleAuthProvider();

// Accessing Facebook OAuth service using firebase object
const facebookProvider= new firebase.auth.FacebookAuthProvider();


// Accessing the firebase firestore service (database) using firebase object for storing user data
const db=firebaseApp.firestore();

// Exporting auth, googleProvider, facebookProvider objects for using it in login component
export {auth, googleProvider, facebookProvider};

// Exporting db object for accessing & performing CRUD operations on firestore database
export default db;
