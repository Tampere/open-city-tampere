/*  @flow */
import React from 'react';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { WebViewModule } from 'open-city-modules';
import ProfileTab from 'src/components/ProfileTab';
import i18n from 'src/config/translations';

const iconProvider = (name: string) => ({ tintColor }: { tintColor: string }) => (
  <Icon name={name} size={35} color={tintColor} />
);

const tabs = {
  Home: {
    screen: withProps({ src: 'https://google.fi', locale: 'en' })(WebViewModule),
    navigationOptions: () => ({
      title: i18n.t('tabs:home'),
      tabBarIcon: iconProvider('home'),
    }),
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
    navigationOptions: () => ({
      title: i18n.t('tabs:profile'),
      tabBarIcon: iconProvider('account'),
    }),
  },
};

export default tabs;
