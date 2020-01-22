// Firebase Database Configuration

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATzGOnX0K2Bjsx3KJu9vAad3HwqWGQmkk",
  authDomain: "fighting-22e24.firebaseapp.com",
  databaseURL: "https://fighting-22e24.firebaseio.com",
  projectId: "fighting-22e24",
  storageBucket: "fighting-22e24.appspot.com",
  messagingSenderId: "917711693554",
  appId: "1:917711693554:web:dd47b95598f5e48e42526b",
  measurementId: "G-P55GR69LJC"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
