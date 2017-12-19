/* @flow */
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { withBackButton } from 'src/config/util';

import styles from './styles';

type Props = {
  navigation: Object,
  screenProps: any,
}

const ServiceView = (props: Props) => {
  const item = props.navigation.state.params.item;
  const Header = withBackButton(props.navigation)(props.screenProps.header);
  return (
    <View>
      <Header />
      <Text>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text>{item.description}</Text>
      <Text>{item.link}</Text>
    </View>
  );
};

export default ServiceView;
