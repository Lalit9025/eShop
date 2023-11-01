// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3YwCmySsxY5-GVUrGRQRuZh_EN-UKBrQ",
  authDomain: "eshop-fb048.firebaseapp.com",
  projectId: "eshop-fb048",
  storageBucket: "eshop-fb048.appspot.com",
  messagingSenderId: "1095883278644",
  appId: "1:1095883278644:web:ba97cd229883b06be27d61",
  measurementId: "G-S2FM26G3FW"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth};
