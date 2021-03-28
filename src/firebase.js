import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCB0R8P2SNjvTCbeWjobXVE7C2Um4n7GTs",
  authDomain: "clone-db7e0.firebaseapp.com",
  projectId: "clone-db7e0",
  storageBucket: "clone-db7e0.appspot.com",
  messagingSenderId: "421808965299",
  appId: "1:421808965299:web:6b815e11fdb4f5ccb8d2c6",
  measurementId: "G-5P79RVCPY0",
});

const db = firebase.firestore();

export { db };
