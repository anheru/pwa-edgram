import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBfnecgqtRaPfZGI3hCGIrVj-pNsJybFv8",
  authDomain: "pwa-edgram-7e719.firebaseapp.com",
  databaseURL: "https://pwa-edgram-7e719.firebaseio.com",
  projectId: "pwa-edgram-7e719",
  storageBucket: "pwa-edgram-7e719.appspot.com",
  messagingSenderId: "56982010920"
}

export const init = () => firebase.initializeApp(config)
