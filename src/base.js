import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDhdicdFDQ1jLNHrQ0ZyTcDnoaimPMElI8",
  authDomain: "habitracker-3212d.firebaseapp.com",
  projectId: "habitracker-3212d",
  storageBucket: "habitracker-3212d.appspot.com",
  messagingSenderId: "37492731469",
  appId: "1:37492731469:web:dbf26cc899bcb0bc84f604",
  measurementId: "G-S210WMV18G",
});

export default app;