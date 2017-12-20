/*  @flow */
import { FeedbackModule, configureFeedback } from 'open-city-modules';
import ProfileTab from 'src/components/ProfileTab';
import feedbackConfig from 'src/config/feedbackConfig.json';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import Feeds from 'src/modules/Feeds';

configureFeedback(feedbackConfig);

const tabs = {

  Home: {
    screen: Feeds,
  },
  Feedback: {
    screen: FeedbackModule,
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
  },

};

export default tabs;
