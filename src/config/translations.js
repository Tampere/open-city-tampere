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
          'city-change-title': 'Open another city\'s app',
        },
        languageStep: {
          question: 'Choose a language',
          options: {
            fi: 'Suomeksi',
            sv: 'På svenska',
            en: 'In english',
          },
        },
        userTypeStep: {
          title: 'Tampere app',
          question: 'Are you',
          options: {
            local: 'Tampere citizen',
            visitor: 'Visitor',
          },
        },
        interestStep: {
          title: 'Tampere app',
          question: 'What are you interested in?',
          options: {
            restaurants: 'Restaurants',
            movies: 'Movies',
            family: 'Family',
            health: 'Health',
            cityPlanning: 'City Planning',
            exercise: 'Exercise',
          },
        },
        areaStep: {
          title: 'Tampere app',
          question: 'What areas are you interested in?',
          options: {
            tammela: 'Tammela',
            tahmela: 'Tahmela',
            keskusta: 'Keskusta',
            ratina: 'Ratina',
            pispala: 'Pispala',
            finlayson: 'Finlayson',
          },
        },
        profileTab: {
          userType: 'User type',
          interests: 'Interests',
          restartOnboarding: 'Edit your choices',
          changeLanguage: 'Change language',
        },
      },
      fi: {
        common: {
          title: 'Tampere app common',
          next: 'Seuraava',
          previous: 'Edellinen',
          finish: 'Valmis',
          'city-change-title': 'Avaa toisen kaupungin sovellus',
        },
        userTypeStep: {
          title: 'Tampere app',
          question: 'Oletko',
          options: {
            local: 'Tamperelainen',
            visitor: 'Vierailija',
          },
        },
        interestStep: {
          title: 'Tampere app',
          question: 'Mitkä aiheet kiinnostavat sinua?',
          options: {
            restaurants: 'Ravintolat',
            movies: 'Elokuvat',
            family: 'Perhe',
            health: 'Terveys',
            cityPlanning: 'Kaupunki-suunnittelu',
            exercise: 'Liikunta',
          },
        },
        areaStep: {
          title: 'Tampere app',
          question: 'Mitkä alueet sinua kiinnostavat?',
          options: {
            tammela: 'Tammela',
            tahmela: 'Tahmela',
            keskusta: 'Keskusta',
            ratina: 'Ratina',
            pispala: 'Pispala',
            finlayson: 'Finlayson',
          },
        },
        profileTab: {
          userType: 'Käyttäjätyyppi',
          interests: 'Kiinnostuksen kohteet',
          restartOnboarding: 'Muuta valintojasi',
          changeLanguage: 'Vaihda kieltä',
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
