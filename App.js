import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, View } from 'react-native';
import Routes from './routes/Routes.js';
import { Provider } from 'react-redux';


import store from './store/store.js';

class eatApp extends Component {
   render() {
      return (
         <Provider store={store}>
            <Routes />
         </Provider>
      )
   }
}
export default eatApp

AppRegistry.registerComponent('eatApp', () => eatApp);