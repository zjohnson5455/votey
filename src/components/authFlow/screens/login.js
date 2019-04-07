import React, { Component } from 'react';
import {
  View, Dimensions, Text, TextInput, StyleSheet, Button, Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Firebase from '../../../Firebase';

const { width, height } = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      email: '',
      password: '',
    };
  }

  _onLayoutDidChange = (e) => {
    const { layout } = e.nativeEvent;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  signIn = async () => {
    console.log(this.state.email);
    console.log(this.state.password);

    try {
      await Firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      console.log('I think it worked?');
    } catch (e) {
      Alert.alert(
        'Oh no! Something Went Wrong!',
        'Make sure your email and password are correct',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            multiline
            style={styles.text}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            multiline
            style={styles.text}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />

          <Button title="Login" onPress={this.signIn} />
          <Button
            onPress={() => this.props.navigation.navigate('Create')}
            title="Go to create"
          />
          <Button
            onPress={() => this.props.navigation.navigate('AppFlow')}
            title="Go to home"
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // baseFont: {
  //   fontSize: 18,
  //   marginBottom: 10,
  //   textAlign: 'center'
  // },
  // container: {
  //   alignItems: 'center',
  //   flex: 1,
  //   padding: 20
  // },
  // imageStyle: {
  //   width: 250,
  //   height: 350,
  //   justifyContent: 'space-between'
  // },
  text: {
    margin: 10,
    color: 'black',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 20,
    textDecorationLine: 'none',
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5
  },
});


export default Login;
