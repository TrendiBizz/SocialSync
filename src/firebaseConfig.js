// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAzRIv0IK6k_-bK9kXJP2MrPPcb6SkhxaM',
  authDomain: 'socialsync-5e4eb.firebaseapp.com',
  projectId: 'socialsync-5e4eb',
  storageBucket: 'socialsync-5e4eb.firebasestorage.app',
  messagingSenderId: '809899935886',
  appId: '1:809899935886:web:73a17db5d837cce70ba1df',
  measurementId: 'G-MGYTYMJF2Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
