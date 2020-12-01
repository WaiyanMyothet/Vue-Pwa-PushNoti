import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import firebase from "firebase";
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "xxxx-xxxx-xxxx-xxxx",
  authDomain: "xxxx-xxxx-xxxx-xxxx",
  databaseURL: "xxxx-xxxx-xxxx-xxxx",
  projectId: "xxxx-xxxx-xxxx-xxxx",
  storageBucket: "xxxx-xxxx-xxxx-xxxx",
  messagingSenderId: "xxxx-xxxx-xxxx-xxxx",
  appId: "xxxx-xxxx-xxxx-xxxx",
  measurementId: "xxxx-xxxx-xxxx-xxxx"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.getToken({vapidKey: "xxxx-xxxx-xxxx-xxxx"}).then(token=>{
  console.log(token);
})
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
