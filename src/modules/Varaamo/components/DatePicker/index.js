/* @flow */


import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Calendar from 'react-native-calendars';
import Color from 'color'
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type Props = {
  label: string;
  placeholder: string;
  onChangeSelection: (selection: string) => void;
  data: Array<{key: string, label: string}>;
  value: string;
}

const DatePicker = ({
  label,
  placeholder,
  value,
  onPress,
}: Props) => (
  <View
    style={styles.row}
  >
    <View
      style={styles.label}
    >
      <Text
        style={styles.labelText}
      >
        {label}
      </Text>
    </View>
    <TouchableOpacity
      onPress={onPress}
      style={styles.inputContainer}
    >
      <View style={styles.picker}>
        <Text>{value || placeholder}</Text>
      </View>

    </TouchableOpacity>
  </View>
);


export default DatePicker;
