import React, { Component } from 'react';
import {
  View, Dimensions, Text, Button
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Home extends Component {
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
        <Text>Home</Text>
        <Button
          onPress={() => this.props.navigation.navigate('GroupStackNav')}
          title="Go to group (from list)"
        />
        <Button
          onPress={() => this.props.navigation.navigate('JoinStackNav')}
          title="Join a group"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Create')}
          title="Create a group"
        />
      </View>
    );
  }
}

export default Home;
