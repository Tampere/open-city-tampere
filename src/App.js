import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';


const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const FeedbackScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Feedback Screen</Text>
  </View>
);

const App = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Feedback: {
    screen: FeedbackScreen,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
});

export default App;
