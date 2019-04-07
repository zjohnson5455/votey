import { createStackNavigator } from 'react-navigation';
import Login from '../components/authFlow/screens/login';
import Create from '../components/authFlow/screens/createAccount';


// nest stack navigator to handle two internal views
const AuthStackNavigator = createStackNavigator(
  {
  // keys are the names of the "routes"
    Login,
    Create,
  },
  { headerMode: 'screen' },
);


export default AuthStackNavigator;
