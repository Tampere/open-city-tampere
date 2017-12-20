/* @flow */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

type Props = {
  label: string,
  icon: any,
  onPress: () => void,
};

const MenuItem = (props: Props) => (
  <TouchableOpacity onPress={props.onPress} style={styles.container}>
    <View style={styles.iconWrapper}>
      <Image source={props.icon} style={styles.icon} />
    </View>
    <Text style={styles.label}>{props.label}</Text>
  </TouchableOpacity>
);

export default MenuItem;
