import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const MainStackNav = createStackNavigator({
  Home: HomeScreen
}, {
  headerMode: 'screen'
});

export default createBrowserApp(MainStackNav, { history: 'hash' });
