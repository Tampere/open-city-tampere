/* @flow */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { parseString } from 'xml2js';
import he from 'he';
import { withBackButton } from 'src/config/util';
import { translate } from 'react-i18next';

import Wave from 'src/modules/Feeds/components/Wave';
import colors from 'src/config/colors';
import { type Item } from 'src/modules/Feeds/types';

import styles from './styles';

type Props = {
  navigation: Object,
  screenProps: any,
  t: string => string,
};

type State = {
  items: ?Array<Item>,
  loading: boolean,
};

class ItemListView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: null,
      loading: true,
    };
  }

  componentWillMount() {
    const { feed } = this.props.navigation.state.params;
    fetch(feed.url)
      .then(response => response.text())
      .then((text) => {
        parseString(text, (err, result) => {
          const data = result.rss.channel[0].item.map((item) => {
            const dateObj = new Date(item.pubDate[0]);
            const date = `${dateObj.getDate()}.${dateObj.getMonth() + 1}.${dateObj.getFullYear()}`;
            return {
              title: item.title[0],
              description: he.decode(item.description[0].replace('<p>', '').replace('</p>', '')),
              date,
              link: item.link[0],
            };
          });
          this.setState({
            items: data,
            loading: false,
          });
        });
      });
  }

  render() {
    const { loading, items } = this.state;
    const { t, navigation } = this.props;
    const { feed } = navigation.state.params;
    let content;
    if (loading) {
      content = (
        <View style={styles.centeredView}><Text>{t('common:loading')}</Text></View>
      );
    } else if (Array.isArray(items)) {
      content = (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {items.map((item, i) => (
            <TouchableOpacity
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              style={styles.listItem}
              onPress={() => navigation.navigate('ItemDetailView', { item, type: feed.name })}
            >
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemDate}>{t('published')} {item.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    }
    const Header = withBackButton(navigation, colors.min)(this.props.screenProps.Header);
    return (
      <View style={{ flex: 1 }}>
        <Header
          bgColor={colors.max}
          fgColor={colors.min}
          title={t(feed.name).toUpperCase()}
        />
        <View style={{ flex: 1 }}>
          <Wave style={{ position: 'absolute', top: 0, zIndex: 2 }} />
          { content }
        </View>
      </View>
    );
  }
}


export default translate(['feeds', 'common'])(ItemListView);
