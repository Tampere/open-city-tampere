/* @flow */
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
  navigation: Object,
  screenProps: {
    Header: React.ComponentType<any>,
  },
};

const Menu = (props: Props) => {
  const { Header } = props.screenProps;
  const goToItemListView = service => props.navigation.navigate('ItemListView', { service });
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.servicesContainer}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => goToItemListView('news')}
        >
          <Text>Uutiset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => goToItemListView('events')}
        >
          <Text>Tapahtumat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.servicesContainer}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => goToItemListView('notifications')}
        >
          <Text>Ilmoitukset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => goToItemListView('articles')}
        >
          <Text>Artikkelit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
