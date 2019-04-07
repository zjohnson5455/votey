import React from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';

import Firebase from './src/Firebase';
// import db from './src/config';
import Root from './src';


export default class App extends React.Component {
  componentWillMount() {
    Firebase.init();
  }

  render() {
    return (
      <Root />
    );
  }
}
