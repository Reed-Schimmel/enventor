import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import CalendarScreen from '../screens/CalendarScreen';
import EventScreen from '../screens/EventScreen';

// React Navigation docs: https://reactnavigation.org/docs/en/getting-started.html
const MainStackNav = createStackNavigator({
  Home: CalendarScreen,
  Event: EventScreen,
}, {
  headerMode: 'screen'
});

export default createBrowserApp(MainStackNav, { history: 'hash' });
