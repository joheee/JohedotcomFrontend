import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCB8jA55tDKquhiNKP3AFaUVn2UVzfwXPc",
  authDomain: "johedotcom-backend-8ec11.firebaseapp.com",
  projectId: "johedotcom-backend-8ec11",
  storageBucket: "johedotcom-backend-8ec11.appspot.com",
  messagingSenderId: "1004086111697",
  appId: "1:1004086111697:web:25678794de6b916fed84f0"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)

export default function FirebaseView() {
  return(
    <div className=""></div>
  )
}