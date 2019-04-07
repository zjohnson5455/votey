import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './authStackNav';
import AppNavigator from './mainStackNav';
import MaxsScreen from '../components/groupFlow/screens/data';

const MainNav = createSwitchNavigator({
  AppFlow: AppNavigator,
  MaxsThing: MaxsScreen,
  AuthFlow: AuthNavigator,
});

const AppNav = createAppContainer(MainNav);

export default AppNav;
