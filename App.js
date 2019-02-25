import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Bananas from './Components/Bananas/Bananas'
import Greeting from './Components/Greeting/Greeting'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world!</Text>
        <Text>YASS BECKY!!</Text>
        <Bananas />
        <Greeting />
      </View>

    );
  }
}