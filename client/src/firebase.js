// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'floaty-1e239.firebaseapp.com',
  projectId: 'floaty-1e239',
  storageBucket: 'floaty-1e239.appspot.com',
  messagingSenderId: '197685524929',
  appId: '1:197685524929:web:014c3041ce3fda4902d740',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
