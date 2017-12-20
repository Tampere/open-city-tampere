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

import styles from './styles';


type Props = {
  navigation: Object,
  screenProps: any,
  t: string => string,
};

type Item = {
  title: string,
  description: string,
  date: string,
  link: string,
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
    const { t } = this.props;
    let content;
    if (loading) {
      content = (
        <View style={styles.centeredView}><Text>Ladataan tietoja..</Text></View>
      );
    } else if (Array.isArray(items)) {
      content = (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {items.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TouchableOpacity key={i} style={styles.listItem} onPress={() => this.props.navigation.navigate('ItemDetailView', { item })}>
              <Text style={styles.listItemTitle}>{item.title.toUpperCase()}</Text>
              <Text style={styles.listItemDate}>Julkaistu {item.date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    }
    const Header = withBackButton(this.props.navigation, colors.min)(this.props.screenProps.Header);
    return (
      <View style={{ flex: 1 }}>
        <Header
          bgColor={colors.max}
          fgColor={colors.min}
          title={t(this.props.navigation.state.params.feed.name).toUpperCase()}
        />
        <View style={{ flex: 1 }}>
          <Wave style={{ position: 'absolute', top: 0, zIndex: 2 }} />
          { content }
        </View>
      </View>
    );
  }
}


export default translate('feeds')(ItemListView);
