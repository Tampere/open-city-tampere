/* @flow */
import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { makeRequest } from 'src/utils/requests';
import Config from 'src/config/config.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import colors from 'src/config/colors';
import moment from 'moment';

const getButtonList = (item) => {
  const {
    min_period,
    opening_hours
  } = item;

  const {
    closes,
    opens,
    date
  } = opening_hours[0];

  const openingHour = moment(opens);
  const closingHour = moment(closes)
  const ms = closingHour.diff(openingHour);
  const period = moment(min_period, 'HH:mm:ss');
  const periodMs = (period.hours() * 3600000) + (period.minutes() * 60000);
  const intervals = Math.floor(ms / periodMs);
  const buttons = [];

  for (let i = 0; i < intervals; i++) {
    const future = openingHour.clone();
    future.add((periodMs / 1000) * (i), 'seconds');
    const buttonTime = future.format('HH:mm')
    buttons.push({
      timeString: buttonTime,
      time: future,
    })
  }

  if (buttons.length === 0) {
    buttons.push({
      time: moment('08:00:00', 'HH:mm:ss'),
      timeString: '08:00'
    })
  }

  return buttons;
};

const ResourceListItem = (props: Props) => {
  const buttons = getButtonList(props.item);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {
          buttons.map((button) => (
            <TouchableOpacity>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonText}>{button.timeString}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
};

export default ResourceListItem;
