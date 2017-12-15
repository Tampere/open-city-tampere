/*  @flow */
import { WebViewModule } from 'open-city-modules';
import ProfileTab from 'src/components/ProfileTab';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';

const tabs = {
  Home: {
    screen: withProps({ src: 'http://tampereenpalvelut.fi/', locale: 'en' })(WebViewModule),
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
  },
};

export default tabs;
