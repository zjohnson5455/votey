import React, { Component } from 'react';
import {
  View, Dimensions, Text, TextInput, StyleSheet, Button, Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Firebase from '../../../Firebase';

const { width, height } = Dimensions.get('window');

// https://www.youtube.com/watch?v=0TlOhmdl3-M

class FillProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.params.id);

    this.state = {
      size: { width, height },
      email: props.navigation.state.params.email,
      id: props.navigation.state.params.id,
      hometown: '',
    };
  }

  _onLayoutDidChange = (e) => {
    const { layout } = e.nativeEvent;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  createUser = async () => {
    try {
      await Firebase.db.collection('users').add({
        id: this.state.id,
        email: this.state.email,
        hometown: this.state.hometown,
        groups: []
      });
      this.props.navigation.navigate('AppFlow');
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Oh no! Something Went Wrong!',
        'Make sure your email and password are valid',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }

  signUp = async () => {
    console.log(this.state.email);
    console.log(this.state.id);
    console.log(this.state.hometown);
    this.createUser();
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
            placeholder="Hometown"
            placeholderTextColor="black"
            multiline
            style={styles.text}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            onChangeText={hometown => this.setState({ hometown })}
          />

          <Button title="Sign Up" onPress={this.signUp} />
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Go to login"
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
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


export default FillProfile;
