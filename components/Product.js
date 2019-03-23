import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import CustomImagePicker from './shared/ImagePicker.js';
import { getProductsAsync, saveProductAsync } from '../actions/product.actions.js';
import { connect } from 'react-redux';
import { getUid } from 'common';
import { Api } from '../api/api.js';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImagePath: null,
      product: null,
      products: []
    }
  }

  componentWillMount() {
    this.props.getProductsAsync("products");
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products
    });
    console.log(newProps);
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
    let products = this.state.products || [];
    if (this.state.product !== null) {
      products = [...products, this.state.product];
      this.props.saveProductAsync(products);
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

const mapStateToProps = ({ data = {} }) => ({
  data
});

export default connect((state) => (
{
  getProductsAsync,
  saveProductAsync,
}), mapStateToProps)(Product)



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
  