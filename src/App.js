import React, { Component } from 'react';
/* @flow */
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';



const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);
import colors from 'src/colors';

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
    activeTintColor: colors.max,
    activeBackgroundColor: colors.min,
    inactiveTintColor: colors.med,
    inactiveBackgroundColor: colors.min,
  },
});

export default App;
