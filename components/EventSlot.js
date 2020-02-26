 //Description: This file is to implement the event slot.
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';


export default ({names, time}) => (
    <View style = {styles.container}> 
        <Text>{time}</Text> 
        <Text>{names}</Text> 
    </View>

)
//Descriptions of components used for event slot
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-evenly"
        },

    text: {
        ///alignItems: "center"
        textAlignVertical: "center",
        
        

    },
  
});