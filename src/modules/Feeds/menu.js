/* @flow */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Props = {
  navigation: Object,

}

const Menu = (props: Props) => {
  const { Header } = props.screenProps;
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.servicesContainer}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => {console.log(props);props.navigation.navigate('FeedsList', {service: 'news'});}}>
          <Text>Uutiset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => props.navigation.navigate('FeedsList', {service: 'events'})}>
          <Text>Tapahtumat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.servicesContainer}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => props.navigation.navigate('FeedsList', {service: 'notifications'})}>
          <Text>Ilmoitukset</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.centeredView}
        onPress={() => props.navigation.navigate('FeedsList', {service: 'articles'})}>
          <Text>Artikkelit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Menu;
