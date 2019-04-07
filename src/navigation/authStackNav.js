import { createStackNavigator } from 'react-navigation';
import Login from '../components/authFlow/screens/login';
import Create from '../components/authFlow/screens/createAccount';
import FillProfile from '../components/authFlow/screens/fillProfile';


// nest stack navigator to handle two internal views
const AuthStackNavigator = createStackNavigator(
  {
  // keys are the names of the "routes"
    Login,
    Create,
    FillProfile,
  },
  { headerMode: 'screen' },
);


export default AuthStackNavigator;
