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

import styles from './styles';

type Props = {
  navigation: Object,
  screenProps: any,
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
    let url = '';
    const { service } = this.props.navigation.state.params;
    if (service === 'notifications') url = 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/ilmoitukset/rss.xml';
    else if (service === 'events') url = 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/tapahtumat/rss2.xml.stx';
    else if (service === 'articles') url = 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/artikkelit/rss.xml.stx';
    else url = 'https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/tiedotteet/rss.xml.stx';
    fetch(url)
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
    let content;
    if (loading) {
      content = (
        <View style={styles.centeredView}><Text>Ladataan tietoja..</Text></View>
      );
    } else if (Array.isArray(items)) {
      content = (
        <ScrollView>
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
    const Header = withBackButton(this.props.navigation)(this.props.screenProps.Header);
    return (
      <View style={{ flex: 1 }}>
        <Header />
        { content }
      </View>
    );
  }
}


export default ItemListView;
