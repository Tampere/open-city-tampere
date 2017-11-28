/* @flow */
import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { withProps } from 'recompose';

import Onboarding from 'src/Onboarding';
import SingleChoiceStep from 'src/OnboardingSteps/SingleChoiceStep';
import colors from 'src/colors';


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
  { value: 'local', label: 'Kuntalainen' },
  { value: 'visitor', label: 'Tamperelainen' },
];

const userTypeProps = {
  choiceKey: 'userType',
  options: userTypeOptions,
  title: 'Tampere App',
  question: 'Oletko?',
};

const UserTypeStep: React.ComponentType<any> = withProps(userTypeProps)(SingleChoiceStep);

const MyOnboarding = () => (
  <Onboarding
    onFinish={choices => console.warn('choices', choices)}
    steps={[UserTypeStep]}
  />
);

// export default App;
export default MyOnboarding;
