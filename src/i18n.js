/* @flow */
import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        common: {
          title: 'Tampere app',
          next: 'Next',
          previous: 'Previous',
          finish: 'Finish',
        },
        userTypeStep: {
          title: 'Tampere app',
          question: 'Are you',
          options: {
            local: 'Tampere citizen',
            visitor: 'Visitor',
          },
        },
      },
      fi: {
        common: {
          title: 'Tampere app common',
          next: 'Seuraava',
          previous: 'Edellinen',
          finish: 'Valmis',
        },
        userTypeStep: {
          title: 'Tampere app',
          question: 'Oletko',
          options: {
            local: 'Tamperelainen',
            visitor: 'Vierailija',
          },
        },
      },
    },

    ns: ['common'],
    defaultNS: 'common',

    debug: __DEV__,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
