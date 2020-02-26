 //Description: This file is to implement the text styles.
import React from 'react';
import { Text } from 'react-native';

//Description of the function MonoText

     //@pre None

     //post function to implement text styles

     //@param props
     
export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
