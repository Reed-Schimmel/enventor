//Description: This file is used for the launching and loading of the app.

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';

import firebaseConfig from './firebaseConfig';
import AppNavigator from './navigation/AppNavigator';

firebase.initializeApp(firebaseConfig);

   //Description of function App:

      //*@pre None

      //@post Returns an error if the app isn't loading and returns to front page of app otherwise.

      //@param props
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

 //Description of function loadResourcesAsync:

       //@pre None

       //@post Loads resources used in the app, i.e, images and fonts

       //@param None

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

   //Description of function handleLoadingError:

     // @pre None

     //@post Function that warns user if there is a loading error

     //@param error
function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}
   //Description of function handleFinishLoading:

     // @pre None

      //  @post Function that launches the app if the app finishes loading

      //  @param setLoadingComplete
function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

//Creates the background of the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
