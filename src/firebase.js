import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCWlEIJl6ld_5aIQPobqMztlUymBXuuvwQ",
    authDomain: "i-nstagram-reel.firebaseapp.com",
    databaseURL: "https://i-nstagram-reel.firebaseio.com",
    projectId: "i-nstagram-reel",
    storageBucket: "i-nstagram-reel.appspot.com",
    messagingSenderId: "24467672494",
    appId: "1:24467672494:web:c9e5ff312d987c3a8a4c3f",
    measurementId: "G-41VYGC5GCK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
