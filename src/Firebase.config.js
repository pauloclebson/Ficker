
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAJ5EeAxR6Ear_GbNZEEfKIKl5259UIGXQ",
  authDomain: "app-financa-20df6.firebaseapp.com",
  projectId: "app-financa-20df6",
  storageBucket: "app-financa-20df6.appspot.com",
  messagingSenderId: "833748235043",
  appId: "1:833748235043:web:ca29ad3838dc3f658b5296",
  measurementId: "G-BQ6PY5T8N9"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)