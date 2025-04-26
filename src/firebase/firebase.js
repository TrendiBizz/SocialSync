// /src/firebase/firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; // Add Firebase Authentication

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'bK9kXJP2MrPPcb6SkhxaM',
  authDomain: 'socialsync-5e4eb.firebaseapp.com',
  projectId: 'socialsync-5e4eb',
  storageBucket: 'socialsync-5e4eb.firebasestorage.app',
  messagingSenderId: '809899935886',
  appId: '1:809899935886:web:73a17db5d837cce70ba1df',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

// Firebase Authentication Functions
export const signUp = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error signing in:', error.message);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};

// Firestore Functions
export const createPost = async (title, content) => {
  try {
    await db.collection('posts').add({
      title,
      content,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error creating post:', error.message);
  }
};

export const getPosts = async () => {
  try {
    const snapshot = await db.collection('posts').get();
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
};

export { db, auth };
