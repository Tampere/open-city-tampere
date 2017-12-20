/* @flow */
import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { withBackButton } from 'src/config/util';

import styles from './styles';

type Props = {
  navigation: Object,
  screenProps: any,
}

const ServiceView = (props: Props) => {
  const { item } = props.navigation.state.params;
  const Header = withBackButton(props.navigation)(props.screenProps.Header);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>Julkaistu {item.date}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Text style={styles.link}>Lue koko uutinen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceView;
