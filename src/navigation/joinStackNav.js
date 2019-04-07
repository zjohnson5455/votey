import { createStackNavigator } from 'react-navigation';
import Join from '../components/createJoinFlow/screens/join';
import GroupDetail from '../components/createJoinFlow/screens/viewGroupDetails';


// nest stack navigator to handle two internal views
const JoinStackNavigator = createStackNavigator(
  {
    Join,
    GroupDetail,
  },
  { headerMode: 'none' },
);


export default JoinStackNavigator;
