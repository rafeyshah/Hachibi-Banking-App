import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCC-AIj4MJrSfcnooK4CZLE9FgWt-LRS0c",
    authDomain: "hachibi-banking-app.firebaseapp.com",
    databaseURL: "https://hachibi-banking-app-default-rtdb.firebaseio.com",
    projectId: "hachibi-banking-app",
    storageBucket: "hachibi-banking-app.appspot.com",
    messagingSenderId: "811258147703",
    appId: "1:811258147703:web:737f6c601d62ac6813a772",
    measurementId: "G-V3LMDYXLQK"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    export const auth = firebase.auth()
    export const db = firebase.firestore()

