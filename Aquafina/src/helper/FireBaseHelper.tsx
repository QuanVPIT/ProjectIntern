// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDEE_zVguteGo6zrXeFl0_fTWARu-EUrZs",
  authDomain: "aquafina-8481d.firebaseapp.com",
  projectId: "aquafina-8481d",
  storageBucket: "aquafina-8481d.appspot.com",
  messagingSenderId: "726381948575",
  appId: "1:726381948575:web:031eb7766864d0bcde3caa",
  measurementId: "G-RESMFRYLZM",
  databaseURL: "https://aquafina-8481d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
