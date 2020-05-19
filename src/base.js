import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6xMRU7ERhEQPGVeH8r1pJyfm0zjw3jXs",
    authDomain: "recette-app-fab08.firebaseapp.com",
    databaseURL: "https://recette-app-fab08.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
