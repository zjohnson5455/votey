import { createStackNavigator } from 'react-navigation';
import Join from '../components/createJoinFlow/screens/join';
import Seal from '../components/createJoinFlow/screens/sealTheDeal';
import GroupDetail from '../components/createJoinFlow/screens/viewGroupDetails';


// nest stack navigator to handle two internal views
const JoinStackNavigator = createStackNavigator(
  {
    Join,
    GroupDetail,
    Seal,
  },
  { headerMode: 'none' },
);


export default JoinStackNavigator;
