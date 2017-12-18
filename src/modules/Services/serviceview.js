/* @flow */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';

type Props = {
  navigation: Object,
}

const ServiceView = (props: Props) => {
  const item = props.navigation.state.params.item;
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text>{item.description}</Text>
      <Text>{item.link}</Text>
    </View>
  );
};

export default ServiceView;
