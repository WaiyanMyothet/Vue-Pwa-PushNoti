// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.

firebase.initializeApp({
  apiKey: "xxxx-xxxx-xxxx-xxxx",
  authDomain: "xxxx-xxxx-xxxx-xxxx",
  databaseURL: "xxxx-xxxx-xxxx-xxxx",
  projectId: "xxxx-xxxx-xxxx-xxxx",
  storageBucket: "xxxx-xxxx-xxxx-xxxx",
  messagingSenderId: "xxxx-xxxx-xxxx-xxxx",
  appId: "xxxx-xxxx-xxxx-xxxx",
  measurementId: "xxxx-xxxx-xxxx-xxxx" // 4. Get Firebase Configuration
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]