 //Description: This file is used for the navigation of the app.

import { createBrowserApp } from '@react-navigation/web';
import { createStackNavigator } from 'react-navigation-stack';
import CalendarScreen from '../screens/CalendarScreen';
import EventScreen from '../screens/EventScreen';


 //Description of the function on the right:

     // @pre None

     // @post Navigates to the CalendarScreen of the app as first page and EventScreen of the app as second page

     // @param None
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
