import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD6cVVbZMfIX6J_LmwuTIpaQalqJuUMQh0",
  authDomain: "clone-c73d1.firebaseapp.com",
  projectId: "clone-c73d1",
  storageBucket: "clone-c73d1.appspot.com",
  messagingSenderId: "947552762386",
  appId: "1:947552762386:web:30b46dabc82ea0d9b9b6cb",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
