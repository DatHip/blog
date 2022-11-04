import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
   apiKey: "AIzaSyD144nkiJcAKcIquivFNnme7j5_bTd7Spw",
   authDomain: "monkey-blogging-react.firebaseapp.com",
   projectId: "monkey-blogging-react",
   storageBucket: "monkey-blogging-react.appspot.com",
   messagingSenderId: "846684192765",
   appId: "1:846684192765:web:04bc1b6cbbef67286fe394",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
