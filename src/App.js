/* @flow */
import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { withProps } from 'recompose';
// import { translate } from 'react-i18next';

import Onboarding from 'src/Onboarding';
import SingleChoiceStep from 'src/OnboardingSteps/SingleChoiceStep';
import colors from 'src/colors';
// i18n must be imported so that it gets initialized
// eslint-disable-next-line no-unused-vars
import i18n from 'src/i18n';

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
const userTypeOptions2 = [
  { value: 'local' },
  { value: 'visitor' },
];

const userTypeProps = {
  choiceKey: 'userType',
  options: userTypeOptions,
  ns: 'userTypeStep',
};
const userTypeProps2 = {
  choiceKey: 'userType2',
  options: userTypeOptions2,
  ns: 'userTypeStep',
};

const UserTypeStep: React.ComponentType<any> = withProps(userTypeProps)(SingleChoiceStep);
const UserTypeStep2: React.ComponentType<any> = withProps(userTypeProps2)(SingleChoiceStep);

const MyOnboarding = () => (
  <Onboarding
    onFinish={choices => console.warn('choices', choices)}
    steps={[UserTypeStep, UserTypeStep2]}
  />
);

// export default App;
export default MyOnboarding;
