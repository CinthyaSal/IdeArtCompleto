import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDP33iV1me-3yXGprVNYZw8N3zLAlfDqMw",
  authDomain: "ideart-950d0.firebaseapp.com",
  databaseURL: "https://ideart-950d0-default-rtdb.firebaseio.com",
  projectId: "ideart-950d0",
  storageBucket: "ideart-950d0.appspot.com",
  messagingSenderId: "977903911517",
  appId: "1:977903911517:web:f05529fa8206b09a36c3b4"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();