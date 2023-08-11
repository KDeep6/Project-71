import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAe1CfyQkD8zo5XaWne99w31YdKQqbz9u8",
  authDomain: "complaint-forum-8f405.firebaseapp.com",
  projectId: "complaint-forum-8f405",
  storageBucket: "complaint-forum-8f405.appspot.com",
  messagingSenderId: "1093260976936",
  appId: "1:1093260976936:web:0b5c7fe46274649d1da61d"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

