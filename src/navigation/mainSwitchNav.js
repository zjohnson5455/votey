import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './authStackNav';
import AppNavigator from './mainStackNav';


const MainNav = createSwitchNavigator({
  AuthFlow: AuthNavigator,
  AppFlow: AppNavigator,
});


export default MainNav;
