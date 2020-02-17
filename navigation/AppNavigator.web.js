import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import CalendarScreen from '../screens/CalendarScreen';
import EventScreen from '../screens/EventScreen';

const MainStackNav = createStackNavigator({
  Home: CalendarScreen,
  Event: EventScreen,
}, {
  headerMode: 'screen'
});

export default createBrowserApp(MainStackNav, { history: 'hash' });
