import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Dashboard extends React.Component {
    /* todo add list of products here */
    render() {
      return (
        <View style={styles.container}>
          <Text>Dashboard</Text>
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
  