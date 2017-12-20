/* @flow */
import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { withBackButton } from 'src/config/util';

import colors from 'src/config/colors';
import Wave from 'src/modules/Feeds/components/Wave';

import styles from './styles';


type Props = {
  navigation: Object,
  screenProps: any,
}

const ServiceView = (props: Props) => {
  const { item } = props.navigation.state.params;
  const Header = withBackButton(props.navigation, colors.min)(props.screenProps.Header);
  return (
    <View style={styles.container}>
      <Header
        bgColor={colors.max}
        fgColor={colors.min}
        title=" "
      />
      <ScrollView>
        <View style={styles.topContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>Julkaistu {item.date}</Text>
        </View>
        <Wave />
        <View style={styles.bottomContent}>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
            <Text style={styles.link}>Lue koko uutinen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceView;
