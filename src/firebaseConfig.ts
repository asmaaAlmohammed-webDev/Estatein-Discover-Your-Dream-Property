// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtENw4zeKevZjg4qZ6n4XMdW3QqObg11Y",
  authDomain: "estate-a7141.firebaseapp.com",
  projectId: "estate-a7141",
  storageBucket: "estate-a7141.firebasestorage.app",
  messagingSenderId: "12374332684",
  appId: "1:12374332684:web:65343728ac2df990422529",
  measurementId: "G-C1YL2YFKBQ"
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
// const analytics = getAnalytics(config);