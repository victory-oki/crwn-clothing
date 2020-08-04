import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDkzGeQmIr1rvPkxbyZz5CyethDGOrED54",
  authDomain: "crwn-db-dcdaa.firebaseapp.com",
  databaseURL: "https://crwn-db-dcdaa.firebaseio.com",
  projectId: "crwn-db-dcdaa",
  storageBucket: "crwn-db-dcdaa.appspot.com",
  messagingSenderId: "1050390906959",
  appId: "1:1050390906959:web:7832798cf864e74bf9823a",
  measurementId: "G-E5GK3SSQ0W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
