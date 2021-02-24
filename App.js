import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Router from './src/config/Router';
export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  };
};