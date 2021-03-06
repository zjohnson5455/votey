import React, { Component } from 'react';
import {
  View, ScrollView, StyleSheet, Dimensions, Text, Image, Button, Alert, TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Firebase from '../../../Firebase';

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
    const pic = {
      uri: 'https://www.onlinestores.com/flagdetective/images/download/united-states-of-america-hi.jpg'
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
          <View style={{ height: 50, width: 400, backgroundColor: '#f4f8fc' }}>
            <View style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
            }}
            >
              <Text style={styles.title}>VOTEY</Text>
            </View>
          </View>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <Image
            source={pic}
            style={{
              marginTop: 20, marginBottom: 10, height: 130, width: 250
            }}
          />
          <Text style={styles.normal}>Voting District: Hanover, NH</Text>
          <Text style={styles.normal}>Polling Place: Hanover High</Text>
          <Text style={styles.normal}>Next Election: Presidential Primary</Text>
          <Text style={styles.normal}>Vote by January 1st, 2018</Text>

          <View style={{
            height: 50, width: 400, marginTop: 20, backgroundColor: '#f4f8fc'
          }}
          >
            <View style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
            }}
            >
              <Text style={styles.groups}>GROUPS</Text>
            </View>
          </View>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('MaxsThing')}
          >
            <View style={{ height: 50, width: 400, backgroundColor: '#b5b8bc' }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={styles.groups}> Hackathon Voters</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('MaxsThing')}
          >
            <View style={{ height: 50, width: 400, backgroundColor: '#b5b8bc' }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={styles.groups}> Valley Dems</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('MaxsThing')}
          >
            <View style={{ height: 50, width: 400, backgroundColor: '#b5b8bc' }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={styles.groups}> Dartmouth 20s </Text>
              </View>
            </View>
          </TouchableOpacity>


          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('MaxsThing')}
          >
            <View style={{ height: 50, width: 400, backgroundColor: '#b5b8bc' }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={styles.groups}> Math Majors </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('MaxsThing')}
          >
            <View style={{ height: 50, width: 400, backgroundColor: '#b5b8bc' }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={styles.groups}> The Review </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />

          <TouchableOpacity
            style={styles.trial}
            onPress={() => navigate('MaxsThing')}
          >
            <View style={{ height: 50, width: 400, backgroundColor: '#b5b8bc' }}>
              <View style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
              }}
              >
                <Text style={styles.groups}> NH Votes! </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ height: 1, width: 400, backgroundColor: 'black' }} />
          <Button title="Create New Group" onPress={() => this.props.navigation.navigate('Create')} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  normal: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
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
    justifyContent: 'center',
  }
});

export default Home;
