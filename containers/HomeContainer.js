import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import   Home from '../components/Home.js';
import { getProducts } from '../actions/product.actions.js';

//Map actions hereactions here
const mapDispatchToProps = (dispatch) => ({
  getProducts: (event) => { dispatch(getProducts(event)) },
  //{ //getProducts: getProducts }
})

export default connect(state => ({ products: state.products }), mapDispatchToProps)(Home)