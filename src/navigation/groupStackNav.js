import { createStackNavigator } from 'react-navigation';
import Data from '../components/groupFlow/screens/data';
import Messages from '../components/groupFlow/screens/messaging';


// nest stack navigator to handle two internal views
const GroupStackNavigator = createStackNavigator(
  {
  // keys are the names of the "routes"
    Messages,
    Data,
  },
  { headerMode: 'none' },
);


export default GroupStackNavigator;
