import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDi6eNYpkWqce7ZX1qd4Vo2Ma3ECb2a7Os",
    authDomain: "disney-clone-71198.firebaseapp.com",
    projectId: "disney-clone-71198",
    storageBucket: "disney-clone-71198.appspot.com",
    messagingSenderId: "1005245519784",
    appId: "1:1005245519784:web:30a72a93838baeeb5a2f9d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };