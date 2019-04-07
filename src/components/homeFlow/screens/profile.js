import React, { Component } from 'react';
import {
  View, Dimensions, Text, Button, Alert
} from 'react-native';

import Firebase from '../../../Firebase';

const { width, height } = Dimensions.get('window');

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const { layout } = e.nativeEvent;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  signOut = async () => {
    console.log('signing out');

    try {
      await Firebase.auth.signOut();
      console.log('I think it worked?');
      this.props.navigation.navigate('AuthFlow');
    } catch (e) {
      Alert.alert(
        'Oh no! Something Went Wrong!',
        'For some reason you could not sign out',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
      >
        <Text>Profile</Text>
        <Button
          onPress={this.signOut}
          title="Sign Out"
        />
      </View>
    );
  }
}

export default Profile;
