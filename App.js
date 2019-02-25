import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Bananas from './Components/Bananas/Bananas'
import Greeting from './Components/Greeting/Greeting'
import LotsOfStyles from './Components/LotsOfStyles/LotsOfStyles'
import FixedDimensionsBasics from './Components/FixedDimensionsBasics/FixedDimensionsBasics'
import FlexDimensionsBasics from './Components/FlexDimensionsBasics/FlexDimensionsBasics'



export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world!</Text>
        <Text>YASS BECKY!!</Text>
        <Bananas />
        <Greeting />
        <LotsOfStyles />
        {/* <FixedDimensionsBasics /> */}
      </View>

    );
  }
}