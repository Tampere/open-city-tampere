import news from 'TampereApp/img/icons/news.png';
import events from 'TampereApp/img/icons/events.png';
import announcements from 'TampereApp/img/icons/announcements.png';
import articles from 'TampereApp/img/icons/articles.png';

// eslint-disable-next-line
export const feeds = [
  {
    name: 'news',
    icon: news,
    url: 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/tiedotteet/rss.xml.stx',
  }, {
    name: 'events',
    icon: events,
    url: 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/tapahtumat/rss2.xml.stx',
  }, {
    name: 'announcements',
    icon: announcements,
    url: 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/ilmoitukset/rss.xml',
  }, {
    name: 'articles',
    icon: articles,
    url: 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/artikkelit/rss.xml.stx',
  },
];
