import { createStackNavigator } from 'react-navigation';

import Chat from './components/Chat';
import Login from './components/Login';

export default createStackNavigator({
  Login: { screen: Login },
  Chat: { screen: Chat }
});
