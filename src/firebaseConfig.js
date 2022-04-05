import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"
import "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyDOF0xTsoXzJVRC_k9fh_FzltACWT8q5x8",
  authDomain: "todo-9d9f8.firebaseapp.com",
  projectId: "todo-9d9f8",
  storageBucket: "todo-9d9f8.appspot.com",
  messagingSenderId: "913015063188",
  appId: "1:913015063188:web:64c7542728f1118a18ea81",
  measurementId: "G-9P78C57SHG"
};
  export default firebase.initializeApp(firebaseConfig);
   

