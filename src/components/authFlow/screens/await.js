import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

class Await extends Component {
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
        <Text>Await screen</Text>
      </View>
    );
  }
}

export default Await;
