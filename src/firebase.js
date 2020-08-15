import React from "react";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDR_rFzCcegGm-YZOFFf5j18gmXqGPKosM",
  authDomain: "netflix-clone-2c32e.firebaseapp.com",
  databaseURL: "https://netflix-clone-2c32e.firebaseio.com",
  projectId: "netflix-clone-2c32e",
  storageBucket: "netflix-clone-2c32e.appspot.com",
  messagingSenderId: "589593734666",
  appId: "1:589593734666:web:48c04f857a1a479bb179f3",
  measurementId: "G-8J171JF40N",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
