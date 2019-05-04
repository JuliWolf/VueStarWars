import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'vue-starwars',
  databaseURL: 'https://vue-starwars.firebaseio.com'
});

export const db = firebase.firestore();

