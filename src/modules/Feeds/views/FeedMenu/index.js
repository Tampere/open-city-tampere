/* @flow */
import * as React from 'react';
import {
  View,
} from 'react-native';

import MenuItem from 'src/modules/Feeds/components/MenuItem';
import styles from './styles';
import news from 'TampereApp/img/icons/news.png';
import events from 'TampereApp/img/icons/events.png';
import announcements from 'TampereApp/img/icons/announcements.png';
import articles from 'TampereApp/img/icons/articles.png';

type Props = {
  navigation: Object,
  screenProps: {
    Header: React.ComponentType<any>,
  },
};

const FeedMenu = (props: Props) => {
  const { Header } = props.screenProps;
  const goToItemListView = service => props.navigation.navigate('ItemListView', { service });
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.feedContainer}>
        <MenuItem
          label="Uutiset"
          icon={news}
          onPress={() => goToItemListView('news')}
        />
        <MenuItem
          label="Tapahtumat"
          icon={events}
          onPress={() => goToItemListView('events')}
        />
        <MenuItem
          label="Ilmoitukset"
          icon={announcements}
          onPress={() => goToItemListView('notifications')}
        />
        <MenuItem
          label="Artikkelit"
          icon={articles}
          onPress={() => goToItemListView('articles')}
        />
      </View>
    </View>
  );
};

export default FeedMenu;
