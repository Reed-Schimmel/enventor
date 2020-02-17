import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import CalendarScreen from '../screens/CalendarScreen';
import EventScreen from '../screens/EventScreen';

const MainStackNav = createStackNavigator({
  Home: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.name}'s Profile'`,
      headerShown: false
    }),
  },
  Event: EventScreen,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    // headerShown: false,
    // headerStyle
  },
});

export default createBrowserApp(MainStackNav, { history: 'hash' });
