// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyDN7jcN-kItT_1GrzjAftlZIpCFVQg5uA8",
  authDomain: "mi-proyecto-vue.firebaseapp.com",
  databaseURL: "https://mi-proyecto-vue.firebaseio.com",
  projectId: "mi-proyecto-vue",
  storageBucket: "mi-proyecto-vue.appspot.com",
  messagingSenderId: "568169758636"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: {
        App
      },
      router
    })
  }
});
