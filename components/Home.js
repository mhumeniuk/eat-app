import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native';
import CustomButton from './shared/CustomButton.js';
import { Actions } from 'react-native-router-flux'

export default class Home extends React.Component {

  ComponentWillMount() {
    this.props.getProductsAsync()
  }

  goTo(name) {
    Actions[name]();
  }
  //TODO: create splashscreen
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Dashboard" onPress={this.goTo.bind(this, "dashboard")}></Button>
        <Button title="Product" onPress={this.goTo.bind(this, "product")}></Button>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
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
