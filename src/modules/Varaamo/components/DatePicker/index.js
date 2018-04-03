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
    <View
      style={styles.inputContainer}
    >
      <View style={styles.picker}>
        <Text>{value ? value : placeholder}</Text>
        <TouchableOpacity>

            <Icon style={styles.dateButton} name="keyboard-arrow-down" backgroundColor='transparent' size={26} color={EStyleSheet.value('$colors.min')} />

        </TouchableOpacity>
      </View>

    </View>
  </View>
);


export default DatePicker;
