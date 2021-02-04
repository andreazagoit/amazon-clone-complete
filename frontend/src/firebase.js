import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGvdRvEUiBXeZnXB_3K-Q3C8aSaQ64yls",
  authDomain: "store-4632d.firebaseapp.com",
  projectId: "store-4632d",
  storageBucket: "store-4632d.appspot.com",
  messagingSenderId: "297252874204",
  appId: "1:297252874204:web:1b789aab216649da0e5119",
  measurementId: "G-VF1W784VKL",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { googleProvider };
