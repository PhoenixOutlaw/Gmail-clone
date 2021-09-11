import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCl8-Yyioga6c016xNd6uPmmcjNV8g83Z8",
  authDomain: "clone-3e9ab.firebaseapp.com",
  projectId: "clone-3e9ab",
  storageBucket: "clone-3e9ab.appspot.com",
  messagingSenderId: "143777618624",
  appId: "1:143777618624:web:744a6f40581d476b502b25",
  measurementId: "G-P4ZN1RXN8T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth ,provider};