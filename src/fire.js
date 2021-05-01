import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyC_rPY8VbdlAyE8fTTaFV3YDTyHeDYlwrk',
  authDomain: 'relylabs.firebaseapp.com',
  projectId: 'relylabs',
  storageBucket: 'relylabs.appspot.com',
  messagingSenderId: '994723510479',
  appId: '1:994723510479:web:da8c6dbb0b3f6961e85fba',
}
const fire = firebase.initializeApp(firebaseConfig)

export default fire
