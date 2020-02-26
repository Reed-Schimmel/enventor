 //Description: This file is to implement the tab bar icon.

import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

 //Description of the function TabBarIcon:

     //@pre None
     // @post Description of tab bar icon
     // @param props

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
