/* @flow */
import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
// $FlowFixMe
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { withProps } from 'recompose';
import { initColors, SingleChoiceStep, MultiChoiceStep, OnboardingResults } from 'open-city-modules';
import { translate } from 'react-i18next';

import Onboarding from 'src/Onboarding';
import ProfileTab from 'src/ProfileTab';
import colors from 'src/colors';
import { loadProfile, saveProfile } from 'src/profile';
// i18n must be imported so that it gets initialized
// eslint-disable-next-line no-unused-vars
import i18n from 'src/i18n';

initColors(colors);

const FeedbackScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Feedback Screen</Text>
  </View>
);

const Tabs = TabNavigator({
  Home: {
    screen: OnboardingResults,
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
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

const userTypeOptions = [
  { value: 'local' },
  { value: 'visitor' },
];
const interestOptions = [
  { value: 'restaurants' },
  { value: 'movies' },
  { value: 'family' },
  { value: 'health' },
  { value: 'cityPlanning' },
  { value: 'exercise' },
];

const userTypeProps = {
  choiceKey: 'userType',
  options: userTypeOptions,
  ns: 'userTypeStep',
};
const interestProps = {
  choiceKey: 'interests',
  options: interestOptions,
  ns: 'interestStep',
};

let UserTypeStep: React.ComponentType<any> = withProps(userTypeProps)(SingleChoiceStep);
UserTypeStep = translate()(UserTypeStep);
let InterestStep: React.ComponentType<any> = withProps(interestProps)(MultiChoiceStep);
InterestStep = translate()(InterestStep);

const MyOnboarding = ({ onFinish }) => (
  <Onboarding
    onFinish={onFinish}
    steps={[UserTypeStep, InterestStep]}
  />
);

type Props = {};
type State = { loadingProfile: boolean, showOnboarding: boolean, profile: any };
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showOnboarding: true,
      profile: {},
      loadingProfile: true,
    };
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
    };
    return <Tabs screenProps={screenProps} />;
  }
}

export default App;
