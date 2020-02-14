import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import EventScreen from '../screens/EventScreen';

const MainStackNav = createStackNavigator({
  Event: EventScreen
}, {
  headerMode: 'screen'
});

export default createBrowserApp(MainStackNav, { history: 'hash' });
