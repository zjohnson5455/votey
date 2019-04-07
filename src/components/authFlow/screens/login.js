import React, { Component } from 'react';
import {
  View, Dimensions, Text, Button
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Login extends Component {
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
        <Text>Login Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Create')}
          title="Go to create"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AppFlow')}
          title="Go to home"
        />
      </View>
    );
  }
}

export default Login;
