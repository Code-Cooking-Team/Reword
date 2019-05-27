import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyATMnw8FbczS1-0yJwrHl98EunKDAjE1DM',
    authDomain: 'reword-1.firebaseapp.com',
    databaseURL: 'https://reword-1.firebaseio.com',
    projectId: 'reword-1',
    storageBucket: 'reword-1.appspot.com',
    messagingSenderId: '220877466530',
    appId: '1:220877466530:web:7c95c058eaa3a7ed',
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
