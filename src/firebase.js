// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCpa0x7UIQYEwMWB6ckwCLQpb4F5Ie2asM",
  authDomain: "neuromancy-73107.firebaseapp.com",
  projectId: "neuromancy-73107",
  storageBucket: "neuromancy-73107.appspot.com",
  messagingSenderId: "497151143955",
  appId: "1:497151143955:web:34b676c7250ee1b60b8fe6"
};

// Initialize Firebase
const app = initializeApp(config);

// Get a to the database
const database = getDatabase(app);

export default firebase;