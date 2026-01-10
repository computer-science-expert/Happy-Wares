// firebase.js (COMMON FILE)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBSO6CtJLbJg91AB3CiBmi2roH",
  authDomain: "happy-wares.firebaseapp.com",
  projectId: "happy-wares",
  storageBucket: "happy-wares.appspot.com",
  messagingSenderId: "180861488120",
  appId: "1:180861488120:web:30de3e4fdead14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// -------- ADD PRODUCT --------
export async function addProduct(product) {
  await addDoc(collection(db, "products"), {
    ...product,
    createdAt: serverTimestamp()
  });
}

// -------- GET PRODUCTS --------
export async function getProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map(doc => doc.data());
}
