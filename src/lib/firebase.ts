// src/lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration from your project settings
const firebaseConfig = {
  apiKey: 'AIzaSyAeRYCn1K6L-t9b0XJLXPZrPP6oBtskhwM',
  authDomain: 'socialsync-5e4eb.firebaseapp.com',
  projectId: 'socialsync-5e4eb',
  storageBucket: 'socialsync-5e4eb.appspot.com',
  messagingSenderId: '808999935886',
  appId: '1:808999935886:web:73a17db5d837cee70ba1df',
  measurementId: 'G-MGTYWJMF2Z'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export services
export { app, db, auth, storage };
