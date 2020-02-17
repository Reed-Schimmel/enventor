import React, {Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';


export default ({time}) => (
    
    <View style = {styles.container} textStyle = {styles.text}>
        <Text>{time}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flexDirection: "column", 
      borderWidth: 1,
      height: 50, 
      justifyContent: "space-evenly",
      

    },

    text: {
         textAlign: 'center', 
         justifyContent: "space-evenly"
              
  
    },
  });