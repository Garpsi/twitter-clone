import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBshIPsSpcUiTsYJNCDDi5GjGVSrjASBGA",
  authDomain: "twitter-clon-713b3.firebaseapp.com",
  projectId: "twitter-clon-713b3",
  storageBucket: "twitter-clon-713b3.appspot.com",
  messagingSenderId: "921383109844",
  appId: "1:921383109844:web:5864f04b6d9fb20c39a741"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;