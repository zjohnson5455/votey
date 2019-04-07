import React, { Component } from 'react';
import {
  View, Dimensions, Text, Button
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Join extends Component {
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
        <Text>Join a group (list here)</Text>
        <Button
          onPress={() => this.props.navigation.navigate('GroupDetail')}
          title="Go to group detail"
        />
        <Button
          onPress={() => this.props.navigation.navigate('MainTabNav')}
          title="Go to home"
        />
      </View>
    );
  }
}

export default Join;
