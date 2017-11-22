import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from 'src/colors';


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
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.max,
    activeBackgroundColor: Colors.min,
    inactiveTintColor: Colors.med,
    inactiveBackgroundColor: Colors.min,
  },
});

export default App;
