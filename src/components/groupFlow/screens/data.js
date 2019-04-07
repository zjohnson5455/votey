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
    color: 'black',
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
      uri: 'http://www.kidsdiscover.com/wp-content/uploads/2016/06/document_520_2.jpg'
    };
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#dbeaff',
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
          <Text style={styles.title}> Voting </Text>
          <Text style={styles.normal}>Progress: 6/10 members have voted</Text>
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

          <Member name="Emily" color="#78b575" />
          <Member name="Mary" color="#78b575" />
          <Member name="Arjun" color="#f79191" />
          <Member name="Zack" color="#78b575" />
          <Member name="Max" color="#f79191" />
          <Member name="Brian" color="#78b575" />
          <Member name="Kunal" color="#f79191" />
          <Member name="Wilder" color="#f79191" />
          <Member name="Charles" color="#f79191" />
          <Member name="William" color="#f79191" />
          <Member name="Sam" color="#78b575" />
          <Member name="Wanda" color="#f79191" />

        </View>
      </ScrollView>
    );
  }
}
