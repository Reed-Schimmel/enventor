import React, {Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';


export default ({names}) => (
    
    <View style = {styles.container} textStyle = {styles.text}>
        <Text>{names}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flexDirection: "row", 
      borderWidth: 1, 
      justifyContent: "space-evenly",
      height: 50,
      

    },

    text: {
         textAlign: 'center' 
              
  
    },
  });