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
          signIn: 'Sign in',
          title: 'Tampere app',
          next: 'Next',
          previous: 'Previous',
          finish: 'Finish',
          'city-change-title': 'Open another city\'s app',
          loading: 'Loading...',
        },
        tabs: {
          home: 'Home',
          profile: 'Profile',
          feedback: 'Feedback',
          feeds: 'Feeds',
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
          question: 'Are you a citizen or a visitor?',
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
        authStep: {
          signIn: 'Sign in',
          title: 'Tampere app',
          question: 'Sign in',
          loginDescription: 'By logging in you can reserve spaces and the application will remember your preferences.',
          noLoginDescription: 'You can also use the app without signing in.',
          loginFail: 'Sign in failed. Try again or continue without signing in.',
          alreadyLoggedIn: 'You are already logged in.',
        },
        profileTab: {
          userType: 'User type',
          interests: 'Interested in topics',
          areas: 'Interested in areas',
          restartOnboarding: 'Edit your choices',
          changeLanguage: 'Change language',
        },
        feeds: {
          feeds: 'Feeds',
          news: 'News',
          events: 'Events',
          announcements: 'Announcements',
          articles: 'Articles',
          published: 'Published',
          link: {
            news: 'Read the whole story',
            events: 'View event details',
            announcements: 'Read the whole announcement',
            articles: 'Read the whole article',
          },
        },
      },
      fi: {
        common: {
          title: 'Tampere app common',
          next: 'Seuraava',
          previous: 'Edellinen',
          finish: 'Valmis',
          'city-change-title': 'Avaa toisen kaupungin sovellus',
          loading: 'Ladataan...',
        },
        tabs: {
          home: 'Koti',
          profile: 'Profiili',
          feedback: 'Palaute',
          feeds: 'Ajankohtaista',
        },
        userTypeStep: {
          title: 'Tampere app',
          question: 'Oletko tamperelainen vai vierailija?',
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
        authStep: {
          signIn: 'Kirjaudu',
          title: 'Tampere app',
          question: 'Kirjaudu sisään',
          loginDescription: 'Kirjautumalla sisään pääset varaamaan tiloja ja voit muuttaa älypuhelimesi kirjastokortiksi.',
          noLoginDescription: 'Voit käyttää sovellusta myös kirjautumatta.',
          loginFail: 'Kirjautuminen epäonnistui. Yritä uudelleen tai jatka kirjautumatta.',
          alreadyLoggedIn: 'Olet jo kirjautunut sisään.',
        },
        profileTab: {
          userType: 'Käyttäjätyyppi',
          interests: 'Kiinnostuksen kohteet',
          areas: 'Kiinnostavat alueet',
          restartOnboarding: 'Muuta valintojasi',
          changeLanguage: 'Vaihda kieltä',
        },
        feeds: {
          feeds: 'Ajankohtaista',
          news: 'Uutiset',
          events: 'Tapahtumat',
          announcements: 'Ilmoitukset',
          articles: 'Artikkelit',
          published: 'Julkaistu',
          link: {
            news: 'Lue koko uutinen',
            events: 'Katso tapahtuman tiedot',
            announcements: 'Lue koko ilmoitus',
            articles: 'Lue koko artikkeli',
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
