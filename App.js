import React from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';

import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import db from './src/config';

export default class App extends React.Component {
  addItem = () => {
    db.collection('bananas').add({
      color: 'green',
      name: 'Lovelace',
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  uiConfig = () => {
    firebaseui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Test Database" onPress={this.addItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
