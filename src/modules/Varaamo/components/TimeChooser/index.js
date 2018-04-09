/* @flow */
import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { makeRequest } from 'src/utils/requests';
import Config from 'src/config/config.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import colors from 'src/config/colors';
import moment from 'moment';

const getButtonList = (openingHours, interval) => {
  const {
    closes,
    opens,
    date
  } = openingHours;

  const openingHour = moment(opens);
  const closingHour = moment(closes)
  const ms = closingHour.diff(openingHour);
  const period = moment(interval, 'HH:mm:ss');
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

  return buttons;
};

const ResourceListItem = (props: Props) => {
  const buttons = getButtonList(props.openingHours, props.interval);
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
        { buttons.length === 0 &&
          <Text style={{ fontSize: 20 }}>Tila on kiinni tänä päivänä.</Text>
        }
      </View>
    </View>
  );
};

export default ResourceListItem;
