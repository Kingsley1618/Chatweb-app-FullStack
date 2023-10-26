import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAFToT4r6JoKJ7g6ihl0CltBCXQqJpXoOw",
  authDomain: "group-chat-9bd62.firebaseapp.com",
  projectId: "group-chat-9bd62",
  storageBucket: "group-chat-9bd62.appspot.com",
  messagingSenderId: "825665881849",
  appId: "1:825665881849:web:4c28e9813d27dfffc10428"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
export const storage = firebase.storage()