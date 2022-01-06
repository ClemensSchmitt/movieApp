// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC8jhyw-CE9WnQRVwXsC_Lx5DqtLvBhMM",
  authDomain: "movieapp-e2877.firebaseapp.com",
  databaseURL: "https://movieapp-e2877-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movieapp-e2877",
  storageBucket: "movieapp-e2877.appspot.com",
  messagingSenderId: "934637287333",
  appId: "1:934637287333:web:09ed175ccfcc7aef44da4c",
  measurementId: "G-JP4Q191WYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) != null ? initializeApp(firebaseConfig) : "This is null";
const db = getDatabase(app);

export default {
  db,
  app
}
