import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/homeFlow/screens/home';
import Prizes from '../components/homeFlow/screens/prizes';
import News from '../components/homeFlow/screens/news';
import Profile from '../components/homeFlow/screens/profile';

// const ChatTab = () => <View style={{ flex: 1,
// justifyContent: 'center' }}><Text>CHAT</Text></View>


const MainTabBar = createBottomTabNavigator({
  Home,
  Prizes,
  News,
  Profile,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Prizes') {
        iconName = `ribbon${focused ? '' : '-outline'}`;
      } else if (routeName === 'News') {
        iconName = `paper${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profile') {
        iconName = `contact${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#219653',
    inactiveTintColor: 'gray',
  },
}, {
  initialRouteName: 'DBA',
});


export default MainTabBar;
