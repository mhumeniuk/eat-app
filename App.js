import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './components/routes/Routes.js'

class eatApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default eatApp

AppRegistry.registerComponent('eatApp', () => eatApp)