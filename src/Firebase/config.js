import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGXeAq-CgNwyHE_LjYTdY_w2Vy5B64VyI",
  authDomain: "firegram-a63ee.firebaseapp.com",
  projectId: "firegram-a63ee",
  storageBucket: "firegram-a63ee.appspot.com",
  messagingSenderId: "967738464435",
  appId: "1:967738464435:web:e0d8b723e8ba5c2cadb8c6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage , timestamp };