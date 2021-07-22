import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxVao6FXEoJY3Hbz_5uoALpzF_NMNbTwg",
  authDomain: "crud-cafeteria.firebaseapp.com",
  projectId: "crud-cafeteria",
  storageBucket: "crud-cafeteria.appspot.com",
  messagingSenderId: "948196076949",
  appId: "1:948196076949:web:1e884873787fa757b59a9c",
  measurementId: "G-7Q7JEYDRDP",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const fireAnalytics = firebase.analytics();
const auth = fire.auth();
export { auth };
