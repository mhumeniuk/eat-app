import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import CustomImagePicker from './ImagePicker.js';
import { saveData } from '../api/api.js';

export default class Product extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentImagePath: null,
            product: null
        }
    }

    setImagePath = (uri) => {
        this.setState({
            currentImagePath: uri
        })
    };


    saveProduct = () => {
        if (this.state.product !== null) {
            //dispatch action here on save
            saveData(products, [...this.props.products, this.state.product])
        }
    };

    render() {
      return (
        <View style={ styles.container }>
          <Text>Product</Text>
          <CustomImagePicker onSaveImage={this.saveImagePath}/>
          <Image
            style={{width: 50, height: 50, display: this.currentImagePath ? 'flex' : 'none'}}
            source={{ uri: this.currentImagePath }} />
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
  