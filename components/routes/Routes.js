import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Home.js';
import Dashboard from '../Dashboard.js';
import Product from '../Product.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "dashboard" component = {Dashboard} title = "Dashboard" />
         <Scene key = "product" component = {Product} title = "Product" />
      </Scene>
   </Router>
)
export default Routes;