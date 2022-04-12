// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOAf16Q2_SmrmxitDW4WbKdglU4y_5o1k",
  authDomain: "caloric-app-7e6ae.firebaseapp.com",
  databaseURL: "https://caloric-app-7e6ae-default-rtdb.firebaseio.com",
  projectId: "caloric-app-7e6ae",
  storageBucket: "caloric-app-7e6ae.appspot.com",
  messagingSenderId: "197535500523",
  appId: "1:197535500523:web:8b492d13e9468b614f16ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



/*

import { useFirebaseApp, useFirestoreCollection } from 'reactfire';

import 'firebase/firestore';

export default (props) => {
  const firebaseApp = useFirebaseApp();
  const videosRef = firebaseApp
    .firestore()
    .collection('videos');
  const videos = useFirestoreCollection(videosRef).docs.map(d => ({id: d.id, ...d.data()}));
  return(
    <ul>
      {
        videos.map(
          (video) => <li key={video.id}>{video.title}</li>
        )
      }
    </ul>
  )
}*/ 