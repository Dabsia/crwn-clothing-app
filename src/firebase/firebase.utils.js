import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config =  {
    apiKey: "AIzaSyA0xkQClS1e483GF8csiJu9I4XnVT0_tus",
    authDomain: "crwn-db-dd606.firebaseapp.com",
    projectId: "crwn-db-dd606",
    storageBucket: "crwn-db-dd606.appspot.com",
    messagingSenderId: "632550451078",
    appId: "1:632550451078:web:126cd189127f6ff3d72e07",
    measurementId: "G-ZG4JPBM0WD"
};

firebase.initializeApp(config);



export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;


  