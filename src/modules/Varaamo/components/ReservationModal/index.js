/* @flow */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TextInput,
  ScrollView
} from 'react-native';
import { makeRequest } from 'src/utils/requests';
import Config from 'src/config/config.json';
import ModalSelector from 'react-native-modal-selector';

import styles from './styles';
import colors from 'src/config/colors';

const inputField = ({value, label, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid={'transparent'}
      />
    </View>
  )
}

const ReservationModal = (props: Props) => {
  const {
    name,
    min_period,
    max_period,
  } = props.item;

  const {
    startTime,
    endTime,
    visible = false,
    placeholder,
    closeModal,
    data = [],
    onChangeStartTimeSelection,
    onChangeEndTimeSelection,
  } = props;
  return (
    <Modal
      animationType={'fade'}
      visible={visible}
      transparent={true}
    >
      <ScrollView style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.timeInputContainer}>
            <Text style={styles.inputLabel}>Varauksen ajankohta</Text>
            <ModalSelector
              style={{alignItems: 'stretch'}}
              data={data}
              initValue={placeholder}
              onChange={
                option => onChangeStartTimeSelection({ label: option.label, key: option.key })
              }
            >
              <View style={styles.timePicker}>
                <Text>{startTime}</Text>
              </View>

            </ModalSelector>
          </View>
          <View style={styles.timeInputContainer}>
            <ModalSelector
              style={{alignItems: 'stretch'}}
              data={data}
              initValue={placeholder}
              onChange={
                option => onChangeEndTimeSelection({ label: option.label, key: option.key })
              }
            >
              <View style={styles.timePicker}>
                <Text>{endTime || startTime}</Text>
              </View>

            </ModalSelector>
          </View>
        </View>

        { inputField({ value: '', label: 'Tilaisuuden nimi', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Varaaja / vuokraaja', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Y-tunnus / henkilötunnus', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Puhelin', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Sähköposti', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Tilaisuuden kuvaus', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Osallistujamäärä', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Sähköposti', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Tilaisuuden kuvaus', onChangeText: (text) => console.warn('hello')})}
        { inputField({ value: '', label: 'Osallistujamäärä', onChangeText: (text) => console.warn('hello')})}
        <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={closeModal}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.bodyText}>Peruuta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.bodyText}>Tee varaus</Text>
          </View>
        </TouchableOpacity>
        </View>
        <View style={{height: 45, width: 100}}></View>
      </ScrollView>
    </Modal>
  );
};

export default ReservationModal;
