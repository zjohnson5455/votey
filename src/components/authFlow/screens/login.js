import React, { Component } from 'react';
import {
  View, Dimensions, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity
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
      this.props.navigation.navigate('AppFlow');
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
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#dbeaff',
        }}
        >

        <Text style={styles.title}>VOTEY</Text>

        <View style={{height: 50, width: 300, marginTop: 10, backgroundColor: 'black', borderRadius: 10}} >
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', height: 48, width: 298, backgroundColor: 'white', borderRadius: 10}}>
          <TextInput
            placeholder="email..."
            placeholderTextColor="#8b8d91"
            multiline
            style={styles.text}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>
      </View>

      <View style={{height: 50, width: 300, borderRadius: 10, marginTop: 10, backgroundColor: 'black'}} >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', height: 48, width: 298, backgroundColor: 'white', borderRadius: 10}}>
          <TextInput style={{paddingHorizontal: 100, }}
            placeholder="password..."
            placeholderTextColor="#8b8d91"
            multiline
            style={styles.text}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
          </View>
        </View>

        <TouchableOpacity
          onPress={this.signIn}
        >
        <View style={{borderRadius: 10, height: 50, width: 200, marginTop: 50, marginBottom: 40, backgroundColor: 'black'}} >
          <View style={{borderRadius: 10, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', height: 48, width: 198, backgroundColor: '#b5b8bc'}}>
          <Text style={styles.text}> LOGIN </Text>
          </View>
        </View>
        </TouchableOpacity>

        <Text style={styles.normal}>Don't have an account?</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Create')}
            title="Create one here"
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
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 20,
    textDecorationLine: 'none',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5
  },
  normal: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    color: 'red',
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5
  },
});


export default Login;
