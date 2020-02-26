 //Description: This file is to implement the app layout.

import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
//Description of the function on the right:

     // @pre None

     // @post Description of app layout

     // @param None
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
