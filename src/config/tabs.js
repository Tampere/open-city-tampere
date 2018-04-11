/*  @flow */
import React from 'react';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FeedbackModule, configureFeedback, HomeViewModule, configureHomeView  } from 'open-city-modules';
import Varaamo from 'src/modules/Varaamo'
import feedbackConfig from 'src/config/feedbackConfig.json';
import homeviewConfig from 'src/config/homeviewConfig.json';
import Feeds from 'src/modules/Feeds';
import ProfileTab from 'src/components/ProfileTab';
import i18n from 'src/config/translations';



configureFeedback(feedbackConfig);
configureHomeView(homeviewConfig, null, null)


const iconProvider = (name: string) => ({ tintColor }: { tintColor: string }) => (
  <Icon name={name} size={35} color={tintColor} />
);

const tabs = {
  Home: {
    screen: HomeViewModule,
    navigationOptions: () => ({
      title: i18n.t('tabs:home'),
      tabBarIcon: iconProvider('history'),
    }),
  },
  Feedback: {
    screen: FeedbackModule,
    navigationOptions: () => ({
      title: i18n.t('tabs:feedback'),
      tabBarIcon: iconProvider('map-marker-circle'),
    }),
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
    navigationOptions: () => ({
      title: i18n.t('tabs:profile'),
      tabBarIcon: iconProvider('account'),
    }),
  },
  Varaamo: {
    screen: Varaamo,
    navigationOptions: () => ({
      title: i18n.t('tabs:Varaamo'),
      tabBarIcon: iconProvider('calendar'),
    }),
  },
};

export default tabs;
