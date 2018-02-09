import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDN7jcN-kItT_1GrzjAftlZIpCFVQg5uA8",
    authDomain: "mi-proyecto-vue.firebaseapp.com",
    databaseURL: "https://mi-proyecto-vue.firebaseio.com",
    projectId: "mi-proyecto-vue",
    storageBucket: "mi-proyecto-vue.appspot.com",
    messagingSenderId: "568169758636"
  };


  const firebaseApp=firebase.initializeApp(config);
  const db = firebaseApp.database();

export default db
