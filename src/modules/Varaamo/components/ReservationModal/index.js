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
  ScrollView,
  Dimensions,
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
    supported_reservation_extra_fields,
  } = props.item;

  console.warn(supported_reservation_extra_fields)

  const {
    startTime,
    endTime,
    visible = false,
    placeholder,
    closeModal,
    data = [],
    onChangeStartTimeSelection,
    onChangeEndTimeSelection,
    genericFieldSaver,

  } = props;

  const {
    eventNameField,
    userNameField,
    hetuField,
    phoneField,
    emailField,
    descriptionField,
    participantCountField,
  } = props.formFields

  return (
    <Modal
      animationType={'fade'}
      visible={visible}
      transparent={true}
    >
      <ScrollView style={[styles.container, supported_reservation_extra_fields.length === 0 && { marginVertical: 192, }]}>
        <View style={supported_reservation_extra_fields.length === 0 && { height: Dimensions.get('window').height - 384, }}>

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

          { supported_reservation_extra_fields.length > 0 && inputField({ value: eventNameField, label: 'Tilaisuuden nimi', onChangeText: (text) => genericFieldSaver('eventNameField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: userNameField, label: 'Varaaja / vuokraaja', onChangeText: (text) => genericFieldSaver('userNameField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: hetuField, label: 'Y-tunnus / henkilötunnus', onChangeText: (text) => genericFieldSaver('hetuField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: phoneField, label: 'Puhelin', onChangeText: (text) => genericFieldSaver('phoneField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: emailField, label: 'Sähköposti', onChangeText: (text) => genericFieldSaver('emailField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: descriptionField, label: 'Tilaisuuden kuvaus', onChangeText: (text) => genericFieldSaver('descriptionField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: participantCountField, label: 'Osallistujamäärä', onChangeText: (text) => genericFieldSaver('participantCountField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: phoneField, label: 'Puhelin', onChangeText: (text) => genericFieldSaver('phoneField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: emailField, label: 'Sähköposti', onChangeText: (text) => genericFieldSaver('emailField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: descriptionField, label: 'Tilaisuuden kuvaus', onChangeText: (text) => genericFieldSaver('descriptionField', text)})}
          { supported_reservation_extra_fields.length > 0 && inputField({ value: participantCountField, label: 'Osallistujamäärä', onChangeText: (text) => genericFieldSaver('participantCountField', text)})}
        <View style={[styles.buttonRowContainer, supported_reservation_extra_fields.length === 0 && { position: 'absolute', bottom: 32 }]}>
        <TouchableOpacity
          onPress={closeModal}
        >
          <View style={[styles.buttonContainer]}>
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
      </View>
      </ScrollView>
    </Modal>
  );
};

export default ReservationModal;
