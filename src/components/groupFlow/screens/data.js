import React, { Component } from 'react';
import {
  View, ScrollView, StyleSheet, Dimensions, Text, Image, Button, Alert, TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  normal: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10
  },
  title: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 5
  },
  groups: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontSize: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  trial: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  funny: {
    alignItems: 'center', height: 50, width: 400
  }
});

class Member extends Component {
  render() {
    return (
      <View style={[styles.funny, { backgroundColor: this.props.color }]}>
        <View style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
        }}
        >
          <Text style={styles.normal}>
            {this.props.name}
          </Text>

        </View>
        <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />
      </View>
    );
  }
}

export default class Data extends Component {
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
    const pic = {
      uri: 'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/11138159_890610520995090_2090422664756131236_n.jpg?_nc_cat=109&_nc_ht=scontent.fzty2-1.fna&oh=8c04f3acdd1635ecbfc6ef2c703670d3&oe=5D02DD59'
    };
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'skyblue',
        }}
        >
          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('AppFlow')}
          >
            <View style={{
              position: 'absolute', right: 140, height: 50, width: 70, backgroundColor: '#b5b8bc'
            }}
            />


          </TouchableOpacity>
          <Image
            source={pic}
            style={{
              marginTop: 50, marginBottom: 10, height: 200, width: 200
            }}
          />
          <Text style={styles.title}>HACKATHON</Text>
          <Text style={styles.normal}>Progress: 6/9 members have voted</Text>
          <Text style={styles.normal}>Days left to vote: 3</Text>

          <View style={{
            height: 50, width: 400, marginTop: 20, backgroundColor: '#f4f8fc'
          }}
          >
            <View style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
            }}
            >
              <Text style={styles.groups}>MEMBER STATUS</Text>


            </View>
          </View>

          <Member name="Rexxar" color="green" />
          <Member name="Jaina" color="green" />
          <Member name="Valeera" color="red" />
          <Member name="Zack" color="green" />
          <Member name="Max" color="red" />
          <Member name="Brian" color="green" />
          <Member name="Rexxar" color="red" />
          <Member name="Jaina" color="red" />
          <Member name="Valeera" color="red" />
          <Member name="Zack" color="red" />
          <Member name="Max" color="green" />
          <Member name="Brian" color="red" />

        </View>
      </ScrollView>
    );
  }
}
