import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJqX2_DmbowLKmfPxhFqNR8e7ubmKeHy0",
  authDomain: "filox-b53f9.firebaseapp.com",
  projectId: "filox-b53f9",
  storageBucket: "filox-b53f9.appspot.com",
  messagingSenderId: "613103217536",
  appId: "1:613103217536:web:f525e5cc6fb7fb7899ef65",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
