import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

// component
import Login from './component/login/index.js';
import Wallet from './component/wallet/index.js';

export default class App extends React.Component {
  render() {
    return (
      <Wallet />
      // <Login />
    );
  }
}

