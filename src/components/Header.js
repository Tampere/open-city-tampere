/* @flow */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'src/config/colors';

type Props = {
  onPress: () => void,
};

let styles;

const Header = (props: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Tampere App</Text>
    <TouchableOpacity onPress={props.onPress}>
      <Icon name="city" size={40} color={colors.max} />
    </TouchableOpacity>
  </View>
);

styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: colors.max,
    marginLeft: 40,
  },
});

export default Header;
