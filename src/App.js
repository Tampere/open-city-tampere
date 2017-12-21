/* @flow */
import * as React from 'react';
import {
  View,
} from 'react-native';
// $FlowFixMe
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { withProps } from 'recompose';
import { initColors } from 'open-city-modules';
import { setCustomText } from 'react-native-global-props';

import tabs from 'src/config/tabs';
import MyOnboarding from 'src/config/onboarding';
import Header from 'src/config/header';
import CityChangeModal from 'src/components/CityChangeModal';
import colors from 'src/config/colors';
import { loadProfile, saveProfile } from 'src/profile';
// i18n must be imported so that it gets initialized
// eslint-disable-next-line no-unused-vars
import i18n from 'src/config/translations';

setCustomText({ style: { fontFamily: 'MiloPro' }, backgroundColor: 'transparent' });
initColors(colors);

const Tabs = TabNavigator(tabs, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: colors.med,
    activeBackgroundColor: colors.min,
    inactiveTintColor: colors.max,
    inactiveBackgroundColor: colors.min,
    labelStyle: { fontSize: 12 },
  },
});

type Props = {};
type State = {
  loadingProfile: boolean,
  showOnboarding: boolean,
  profile: any,
  modalVisible: boolean,
};
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showOnboarding: true,
      profile: {},
      loadingProfile: true,
      modalVisible: false,
    };
    // $FlowFixMe
    this.Header = withProps({ defaultRightAction: this.showModal })(Header);
  }

  componentDidMount() {
    loadProfile().then((value) => {
      if (value !== null) {
        this.setState({
          profile: value,
          showOnboarding: false,
          loadingProfile: false,
        });
      } else {
        this.setState({
          loadingProfile: false,
        });
      }
    });
  }

  handleFinish = (profile: any) => {
    this.setState({ showOnboarding: false, profile });
    saveProfile(profile);
  }

  restartOnboarding = () => {
    this.setState({ showOnboarding: true });
  }

  showModal = () => this.setState({ modalVisible: true });
  hideModal = () => this.setState({ modalVisible: false });

  render() {
    if (this.state.loadingProfile) {
      return null;
    }
    if (this.state.showOnboarding) {
      return <MyOnboarding onFinish={this.handleFinish} />;
    }
    const { profile } = this.state;
    const screenProps = {
      colors,
      locale: 'fi',
      profile,
      restartOnboarding: this.restartOnboarding,
      // $FlowFixMe
      Header: this.Header,
    };
    return (
      <View style={{ flex: 1 }}>
        <Tabs screenProps={screenProps} />
        <CityChangeModal visible={this.state.modalVisible} onClose={this.hideModal} />
      </View>
    );
  }
}

export default App;
