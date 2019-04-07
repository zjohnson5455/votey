import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

class Prizes extends Component {
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
    let pic = {
      uri: 'https://www.onlinestores.com/flagdetective/images/download/united-states-of-america-hi.jpg'
    };
    return (
      <ScrollView>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'skyblue',
      }}
      >
        <Image source={pic} style={{marginTop: 20, marginBottom: 10, height: 130, width: 250}}/>
        <Text>Prizes</Text>
      </View>
      </ScrollView>
    );
  }
}

export default Prizes;
