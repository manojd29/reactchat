import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpmYvFxrfpKeMp2n227DNJBdFly6GpqkU",
  authDomain: "reactjs-auth-324ee.firebaseapp.com",
  databaseURL:
    "https://reactjs-auth-324ee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactjs-auth-324ee",
  storageBucket: "reactjs-auth-324ee.appspot.com",
  messagingSenderId: "283143639450",
  appId: "1:283143639450:web:77bc31cc9504934637aa23",
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
