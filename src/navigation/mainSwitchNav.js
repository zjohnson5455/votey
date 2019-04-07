import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './authStackNav';
import AppNavigator from './mainStackNav';


const MainNav = createSwitchNavigator({
  AuthFlow: AuthNavigator,
  AppFlow: AppNavigator,
});

const AppNav = createAppContainer(MainNav);

export default AppNav;
