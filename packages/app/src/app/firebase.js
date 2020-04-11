import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyC64Pbs4EiU5mixNyCivNemZCcUBugmZIM',
  authDomain: 'clone-twitter-fa80c.firebaseapp.com',
  databaseURL: 'https://clone-twitter-fa80c.firebaseio.com',
  projectId: 'clone-twitter-fa80c',
  storageBucket: 'clone-twitter-fa80c.appspot.com',
  messagingSenderId: '392249535836',
  appId: '1:392249535836:web:8ec7bf00a39e1a562f6599',
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database }
