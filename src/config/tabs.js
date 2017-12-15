/*  @flow */
import { WebViewModule, FeedbackModule, configureFeedback } from 'open-city-modules';
import ProfileTab from 'src/components/ProfileTab';
import feedbackConfig from 'src/config/feedbackConfig.json';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';

configureFeedback(feedbackConfig);

const tabs = {

  Home: {
    screen: withProps({ src: 'http://tampereenpalvelut.fi/', locale: 'en' })(WebViewModule),
  },
  Feedback: {
    screen: FeedbackModule,
  },
  Profile: {
    screen: translate('profileTab')(ProfileTab),
  },

};

export default tabs;
