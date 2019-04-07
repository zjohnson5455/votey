import React from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';

import Firebase from './src/Firebase';
// import db from './src/config';
import Root from './src';


export default class App extends React.Component {
  // addItem = () => {
  //   db.collection('bananas').add({
  //     color: 'green',
  //     name: 'Lovelace',
  //   })
  //     .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  // };
  //

  componentWillMount() {
    Firebase.init();
  }

  render() {
    return (
      <Root />
    );
  }
}
