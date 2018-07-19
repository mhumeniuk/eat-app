import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Button = ({ text, action }) => {
    return(
        <TouchableOpacity onPress={action} style={styles.button}><Text>{text}</Text></TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        height: 50,
        width: 130,
        alignItems: 'center'
    },
  });
  