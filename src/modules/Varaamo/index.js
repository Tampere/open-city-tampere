/* @flow */
import * as React from 'react';
// $FlowFixMe
import { StackNavigator } from 'react-navigation';
import colors from 'src/config/colors';
import VaraamoListView from './views/VaraamoListView';

// Navigator for Feeds module
const VaraamoNavigator = StackNavigator({
  VaraamoListView: {
    screen: VaraamoListView,
  },
}, {
  initialRouteName: 'VaraamoListView',
  // headerMode: 'none',
  cardStyle: {
    backgroundColor: colors.min,
  },
});

/*
 Tampere Varaamo
 */
class Varaamo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
  }


  render() {
    return <VaraamoNavigator screenProps={this.props.screenProps} />
  }
}

export default Varaamo;
