// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//console.log(import.meta.env.VITE_FIREBASE_API_KEY);
//checking api_key
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'floaty-b23c5.firebaseapp.com',
  projectId: 'floaty-b23c5',
  storageBucket: 'floaty-b23c5.appspot.com',
  messagingSenderId: '115653996981',
  appId: '1:115653996981:web:4eb922f3d62359dfc6e9fc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
