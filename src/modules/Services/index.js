/* @flow */
import * as React from 'react';
import {
  WebView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import colors from 'src/config/colors';
import styles from './styles';
import Menu from './menu';
import ServicesList from './serviceslist';
import ServiceView from './serviceview';

// Navigator for Services module
const ServicesNavigator = StackNavigator({
  ServiceMenu: {
    screen: Menu,
  },
  ServicesList: {
    screen: ServicesList,
  },
  ServiceView: {
    screen: ServiceView,
  }
}, {
  initialRouteName: 'ServiceMenu',
  headerMode: 'none',
  cardStyle: {
    backgroundColor: colors.min,
  },
});

/*
 Recent news and events in Tampere
 */
class Services extends React.Component {
  render() {
    return <ServicesNavigator />
  }
}

export default Services;
