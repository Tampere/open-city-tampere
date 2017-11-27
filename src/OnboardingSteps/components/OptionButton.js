import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import colors from 'src/colors';

type OptionButtonProps = {
  label: string,
  onPress: () => void,
  selected: boolean,
  style: React.ViewStylePropTypes,
}

let styles;

const OptionButton = (props: OptionButtonProps) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.container, props.style, props.selected && styles.containerSelected]}>
      <Text style={[styles.label, props.selected && styles.labelSelected]}>
        {props.label}
      </Text>
    </View>
  </TouchableOpacity>
);

styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.min,
    borderWidth: 2,
    borderColor: colors.max,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSelected: {
    backgroundColor: colors.max,
  },
  label: {
    fontSize: 20,
    color: colors.max,
  },
  labelSelected: {
    color: colors.min,
  },
});

export default OptionButton;
