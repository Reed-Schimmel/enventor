 //Description: This file provides the description for the settings used in the app.
import React from 'react';
import { ExpoConfigView } from '@expo/samples';

//Description of the function SettingsScreen:

     //@pre None

     //@post main function for settings

     //@param None
export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
