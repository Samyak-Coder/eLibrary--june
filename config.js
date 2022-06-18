import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAJgCrsD-VCI1cb5QkXCtMhSm71bru4XjI",
  authDomain: "story-telling-app-72e5d.firebaseapp.com",
  databaseURL: "https://story-telling-app-72e5d-default-rtdb.firebaseio.com",
  projectId: "story-telling-app-72e5d",
  storageBucket: "story-telling-app-72e5d.appspot.com",
  messagingSenderId: "1036844982798",
  appId: "1:1036844982798:web:b9a5f4437228232b9c525f"
};

  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}