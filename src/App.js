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
import colors from 'src/colors';
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
type State = { showOnboarding: boolean };
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showOnboarding: true,
    };
  }

  hideOnboarding = () => {
    this.setState({ showOnboarding: false });
  }

  render() {
    if (this.state.showOnboarding) {
      return <MyOnboarding onFinish={this.hideOnboarding} />;
    }
    const screenProps = {
      colors,
      locale: 'fi',
    };
    return <Tabs screenProps={screenProps} />;
  }
}

export default App;
