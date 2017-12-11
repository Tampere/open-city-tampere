/*  @flow */
import ProfileTab from 'src/components/ProfileTab';
import { translate } from 'react-i18next';

const tabs = {
  Profile: {
    screen: translate('profileTab')(ProfileTab),
  },
};

export default tabs;
