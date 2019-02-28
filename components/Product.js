import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import CustomImagePicker from './shared/ImagePicker.js';
import { Api } from '../api/api.js';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagePath: null,
      product: null
    }
  }

  saveImagePath = (uri) => {
    this.setState({
      currentImagePath: uri,
      product: {
        name: 'product1',
        imageURI: uri
      }
    });
    console.warn(uri);
  };

  saveProduct = () => {
    if (this.state.product !== null) {
      //dispatch action here on save
      Api.saveData('products', [this.state.product]);
      Api.getData('products');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Product</Text>
        <CustomImagePicker onSaveImage={this.saveImagePath} />
        <Image
          style={{width: 50, height: 50, display: this.currentImagePath ? 'flex' : 'none'}}
          source={{uri: this.currentImagePath}} />
          <Button title="Save Product" onPress={this.saveProduct}></Button>
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
   imageDummy: {
      position: 'absolute',
      width: 100,
      height: 100,
      backgroundColor: 'grey'
   }
});
  