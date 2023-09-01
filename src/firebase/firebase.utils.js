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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;