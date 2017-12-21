/* @flow */
import * as React from 'react';
import {
  View,
} from 'react-native';
import { translate } from 'react-i18next';

import MenuItem from 'src/modules/Feeds/components/MenuItem';
import { feeds } from 'src/modules/Feeds/config';
import colors from 'src/config/colors';
import styles from './styles';

type Props = {
  navigation: Object,
  screenProps: {
    Header: React.ComponentType<any>,
  },
  t: string => string,
};

const FeedMenu = (props: Props) => {
  const { Header } = props.screenProps;
  const goToItemListView = feed => props.navigation.navigate('ItemListView', { feed });
  const { t } = props;
  return (
    <View style={styles.container}>
      <Header
        title={t('feeds').toUpperCase()}
        bgColor={colors.med}
        fgColor={colors.min}
      />
      <View style={styles.feedContainer}>
        { feeds.map(feed => (
          <MenuItem
            key={feed.name}
            label={t(feed.name).toUpperCase()}
            icon={feed.icon}
            onPress={() => goToItemListView(feed)}
          />
        ))}
      </View>
    </View>
  );
};

export default translate('feeds')(FeedMenu);
