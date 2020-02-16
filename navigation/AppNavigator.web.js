import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import CalendarScreen from '../screens/CalendarScreen';

const MainStackNav = createStackNavigator({
  Home: CalendarScreen
}, {
  headerMode: 'screen'
});

export default createBrowserApp(MainStackNav, { history: 'hash' });
