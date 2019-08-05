import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD9J4rsakNEhbwcKE6eL5WQ7aP-pLVQVAI",
    authDomain: "expensify-82d31.firebaseapp.com",
    databaseURL: "https://expensify-82d31.firebaseio.com",
    projectId: "expensify-82d31",
    storageBucket: "",
    messagingSenderId: "764015937700",
    appId: "1:764015937700:web:5a0d545ee117af4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { database as default , firebase};