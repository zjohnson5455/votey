import firebase from 'firebase';

require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyBpuA7o-JwN6H6yhDwuLZHi37fGi3nC5ks',
  authDomain: 'votey-2ccfa.firebaseapp.com',
  databaseURL: 'https://votey-2ccfa.firebaseio.com',
  projectId: 'votey-2ccfa',
  storageBucket: 'votey-2ccfa.appspot.com',
  messagingSenderId: '249948362812'
};

export default class Firebase {
  static auth;

  static db;

  static init() {
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
    Firebase.db = firebase.firestore();
  }
}
