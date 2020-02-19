import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from 'react-native';


export default ({names, time}) => (
    <View> 
        <Text>{time} {names}</Text> 
    </View>

)

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 50,
        flexDirection: 'row', 
    },

    text: {
        
        textAlignVertical: "center",
        
        

    },
  
});