/*  @flow */
import { OnboardingResults } from 'open-city-modules';
import ProfileTab from 'src/components/ProfileTab';
import { translate } from 'react-i18next';

const tabs = {
  Home: {
    screen: OnboardingResults,
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
  },
};

export default tabs;
