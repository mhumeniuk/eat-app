import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Home from '../components/Home.js';
import { getProductsAsync, saveProductAsync, onAddProduct } from '../actions/product.actions.js';

const mapStateToProps = ({ data = {} }) => ({
  data
});

const mapDispatchToProps = (dispatch) => ({
   onAddProduct: (product) => onAddProduct(product, dispatch)
});

export default connect(state =>
   mapStateToProps,
   mapDispatchToProps
)(Home)

