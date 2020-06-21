import * as firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDJOEMetkiCB6dr3_JJHIKOi5CHqqtDYIA',
    authDomain: 'orgaplan-nuxt-vuetify.firebaseapp.com',
    databaseURL: 'https://orgaplan-nuxt-vuetify.firebaseio.com',
    projectId: 'orgaplan-nuxt-vuetify',
    storageBucket: 'orgaplan-nuxt-vuetify.appspot.com',
    messagingSenderId: '538978408508',
    appId: '1:538978408508:web:cdecbd4c672a83b2684b39'
  }

  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}

const fireDb = firebase.firestore()

export { fireDb }
