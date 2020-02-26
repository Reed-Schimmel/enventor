 //Description: This file is to implement the event slot.
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default ({names, time}) => (
    <View style={[
        styles.container, names == 'Invalid Time Slot' ? {backgroundColor: "grey"} : null]}> 
        <Text style = {styles.text}>{time}</Text> 
        <Text style = {styles.text}>{names}</Text> 
    </View>

)
//Descriptions of components used for event slot
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 50,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        },

        text: {
            fontFamily: 'calibri',
            fontSize: 20,
        },

});