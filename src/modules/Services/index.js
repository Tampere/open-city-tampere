/* @flow */
import * as React from 'react';
// $FlowFixMe
import { StackNavigator } from 'react-navigation';

import colors from 'src/config/colors';
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
  },
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
    return <ServicesNavigator screenProps={this.props.screenProps} />
  }
}

export default Services;
