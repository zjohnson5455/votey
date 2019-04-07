import React, { Component } from 'react';
import {
  View, Dimensions, Text, TextInput, StyleSheet, Button, Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Firebase from '../../../Firebase';

const { width, height } = Dimensions.get('window');

// https://www.youtube.com/watch?v=0TlOhmdl3-M

class SealTheDeal extends Component {
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

  seal = async () => {
    console.log('About to seal the deal');
    console.log(this.props.navigation.state.params.groupId);
    console.log(this.props.navigation.state.params.userId);

    try {
      const user = await Firebase.db.collection('users').doc(this.props.navigation.state.params.userId).update({
        groups: [this.props.navigation.state.params.groupId]
      });
      console.log('at least you are successful in that');
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

          <Button title="Join the Group You Just Made!" onPress={this.seal} />
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


export default SealTheDeal;
