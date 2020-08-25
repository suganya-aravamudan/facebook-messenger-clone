import firebase from "firebase";
const { firestore } = require("firebase");

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOLMJ_pBrbGbFHHn-U_qfpWFqo94RJ_7U",
  authDomain: "facebook-messenger-clone-633b5.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-633b5.firebaseio.com",
  projectId: "facebook-messenger-clone-633b5",
  storageBucket: "facebook-messenger-clone-633b5.appspot.com",
  messagingSenderId: "719172837779",
  appId: "1:719172837779:web:9012dd2c0fb0e3f0fd4866",
  measurementId: "G-6KGF8QD682",
});

const db = firebaseApp.firestore();
export default db;
