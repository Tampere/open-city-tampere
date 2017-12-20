/* @flow */
import * as React from 'react';
// $FlowFixMe
import { StackNavigator } from 'react-navigation';

import colors from 'src/config/colors';
import FeedMenu from './views/FeedMenu';
import ItemListView from './views/ItemListView';
import ItemDetailView from './views/ItemDetailView';

// Navigator for Feeds module
const FeedsNavigator = StackNavigator({
  FeedMenu: {
    screen: FeedMenu,
  },
  ItemListView: {
    screen: ItemListView,
  },
  ItemDetailView: {
    screen: ItemDetailView,
  },
}, {
  initialRouteName: 'FeedMenu',
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
