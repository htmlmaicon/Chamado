
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDy28aNPm_gXKVJh0BSpo7e3CgT5b-fIVY",
  authDomain: "ticketsb-2946d.firebaseapp.com",
  projectId: "ticketsb-2946d",
  storageBucket: "ticketsb-2946d.appspot.com",
  messagingSenderId: "171842470432",
  appId: "1:171842470432:web:7509b170bf711ba67a7245"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };