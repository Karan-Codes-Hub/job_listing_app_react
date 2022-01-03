// Import the functions you need from the SDKs you need
import app from 'firebase/app'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmAADnDG1VTrmQoMwrhpFP1A67HdrP8ZI",
  authDomain: "job-listing-b4a71.firebaseapp.com",
  projectId: "job-listing-b4a71",
  storageBucket: "job-listing-b4a71.appspot.com",
  messagingSenderId: "757232850019",
  appId: "1:757232850019:web:564e26286fe5f4cad4d456",
  measurementId: "G-1BZMMTKY8Y"
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase, firestore, app}