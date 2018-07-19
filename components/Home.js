import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Button from './shared/Button.js';
import { Actions } from 'react-native-router-flux'


export default class Home extends React.Component {

    goTo(name) {
        Actions[name]();
    }

    render() {
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          <Button text="Dashboard" action={this.goTo.bind(this, "dashboard")}/>
          <Button text="Product" action={this.goTo.bind(this, "product")}/>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  