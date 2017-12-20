/* @flow */
import * as React from 'react';
// $FlowFixMe
import { StackNavigator } from 'react-navigation';

import colors from 'src/config/colors';
import Menu from './menu';
import FeedsList from './serviceslist';
import ServiceView from './serviceview';

// Navigator for Feeds module
const FeedsNavigator = StackNavigator({
  ServiceMenu: {
    screen: Menu,
  },
  FeedsList: {
    screen: FeedsList,
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
class Feeds extends React.Component {
  render() {
    return <FeedsNavigator screenProps={this.props.screenProps} />
  }
}

export default Feeds;
