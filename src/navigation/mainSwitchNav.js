import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './authStackNav';
import AppNavigator from './mainStackNav';
import MaxsScreen from '../components/groupFlow/screens/data';

const MainNav = createSwitchNavigator({
  AuthFlow: AuthNavigator,
  AppFlow: AppNavigator,
  MaxsThing: MaxsScreen,

});

const AppNav = createAppContainer(MainNav);

export default AppNav;
