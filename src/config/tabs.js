/*  @flow */
import { WebViewModule } from 'open-city-modules';
import ProfileTab from 'src/components/ProfileTab';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import i18n from 'src/config/translations';

const tabs = {
  Home: {
    screen: withProps({ src: 'https://google.fi', locale: 'en' })(WebViewModule),
    navigationOptions: () => ({
      title: i18n.t('tabs:home'),
    }),
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
    navigationOptions: () => ({
      title: i18n.t('tabs:profile'),
    }),
  },
};

export default tabs;
