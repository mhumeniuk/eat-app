import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HomeContainer from '../containers/HomeContainer.js';
import Dashboard from '../components/Dashboard.js';
import Product from '../components/Product.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {HomeContainer} title = "HomeContainer" initial = {true} />
         <Scene key = "dashboard" component = {Dashboard} title = "Dashboard" />
         <Scene key = "product" component = {Product} title = "Product" />
      </Scene>
   </Router>
)
export default Routes;