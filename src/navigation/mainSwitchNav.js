import { createSwitchNavigator } from 'react-navigation';
import MainTabNav from './mainTabNav';
import GroupStackNav from './groupStackNav';
import JoinStackNav from './joinStackNav';
import Create from '../components/createJoinFlow/screens/create';


// nest stack navigator to handle two internal views
const MainSwitchNavigator = createSwitchNavigator(
  {
  // keys are the names of the "routes"
    MainTabNav,
    GroupStackNav,
    JoinStackNav,
    Create,
  },
  { headerMode: 'screen' },
);


export default MainSwitchNavigator;
