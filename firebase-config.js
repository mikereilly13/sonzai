// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJ23fs4LZYMRkT1UHJucmHWgd2XoU3_8",
  authDomain: "sonzai-f59c0.firebaseapp.com",
  projectId: "sonzai-f59c0",
  storageBucket: "sonzai-f59c0.firebasestorage.app",
  messagingSenderId: "722460336202",
  appId: "1:722460336202:web:a0ff80ccd1bd3d8fd246b3",
  measurementId: "G-RJ91R5WQYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);