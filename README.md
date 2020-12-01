## Demo


View application at https://vuepushnoti.firebaseapp.com/. But it won't reply anything as I didn't setup backend.

## Steps


1. Set up Firebase prj at https://firebase.google.com/docs/web/setup 

2. Setup Javascript client at https://firebase.google.com/docs/cloud-messaging/js/client

3. Replace firebase config in main.js

4. create firebase-messaging-sw.js file in public folder.

5. get Authentication Bearer from Firebase

6. Learn to test at https://firebase.google.com/docs/cloud-messaging/js/send-multiple


## Get Authentication Bearer from Firebase

1. Got to Google OAuth Playground: https://developers.google.com/oauthplayground

2. In the "Input your own scopes" for FCM use this url: https://www.googleapis.com/auth/firebase.messaging

3. Tap Authorize API

4. Pick correct user for authorisation and allow acces

5. In the Step 2: Exchange authorization code for tokens tap Exchange authorisation code for tokens

6. Access token is your Bearer