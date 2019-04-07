import React, { Component } from 'react';
import {
  View, Dimensions, Text, Button, TextInput, StyleSheet, Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Firebase from '../../../Firebase';

const { width, height } = Dimensions.get('window');

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
      name: '',
    };
  }

  createGroup = async () => {
    console.log('creating group');
    console.log(this.state.name);
    try {
      const data = await Firebase.db.collection('groups').add({
        name: this.state.name,
        members: [Firebase.auth.currentUser.uid]
      });
      this.props.navigation.navigate('Seal', {
        groupId: data.id,
        userId: Firebase.auth.currentUser.uid
      });
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

  _onLayoutDidChange = (e) => {
    const { layout } = e.nativeEvent;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

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
          <TextInput
            placeholder="Group Name"
            placeholderTextColor="black"
            multiline
            style={styles.text}
            numberOfLines={2}
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
          />
          <Button
            onPress={this.createGroup}
            title="Create Group"
          />
          <Button
            onPress={() => this.props.navigation.navigate('MainTabNav')}
            title="Go to home after creating"
          />
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

export default Create;
