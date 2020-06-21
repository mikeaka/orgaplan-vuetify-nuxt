import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDJOEMetkiCB6dr3_JJHIKOi5CHqqtDYIA',
  authDomain: 'orgaplan-nuxt-vuetify.firebaseapp.com',
  databaseURL: 'https://orgaplan-nuxt-vuetify.firebaseio.com',
  projectId: 'orgaplan-nuxt-vuetify',
  storageBucket: 'orgaplan-nuxt-vuetify.appspot.com',
  messagingSenderId: '538978408508',
  appId: '1:538978408508:web:cdecbd4c672a83b2684b39'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const firestore = firebase.firestore()
// const settings = { timestampsInSnapshots: true }
// firestore.settings() // notice it is firestore instead of firestore()

export default firestore
