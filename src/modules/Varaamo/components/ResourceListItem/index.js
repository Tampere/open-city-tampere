/* @flow */
import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import { makeRequest } from 'src/utils/requests';
import Config from 'src/config/config.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import colors from 'src/config/colors';


const formatPrice = (minPrice, maxPrice) => {
  if (minPrice === maxPrice && (minPrice !== null && maxPrice !== null)) {
    return (minPrice + ' €/h');
  } else if (minPrice && maxPrice && minPrice !== 'null' && maxPrice !== 'null') {
    console.warn(minPrice)
    return (minPrice + ' - ' + maxPrice + ' €/h');
  } else {
    return 'Maksuton'
  }
}

const isResourceReservable = (item) => {
  if (item.opening_hours[0]
    && item.opening_hours[0].opens
    && item.reservable) {
    return 'Vapaa';
  }

  if (item.reservable) {
    return 'Suljettu'
  }

  return 'Varattu';
};

const ResourceListItem = (props: Props) => {
  const {
    name,
    images,
    min_price_per_hour,
    max_price_per_hour,
    unit,
    type,
    reservable,
    people_capacity,
    opening_hours,
  } = props.item;
  const imageUrl = images.length > 0 && images[0].url;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.onPress()
      }}
      >
      <View style={styles.container}>
        <View style={styles.thumbnailContainer}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{ uri: imageUrl }}
          />
          <View style={styles.thumbnailCapacity}>
            <Icon name="people" size={16} color={colors.min} />
            <Text style={styles.capacityText}>{people_capacity}</Text>
          </View>
          <View style={styles.thumbnailDescriptionContainer}>
            <Text style={styles.thumbnailDescription}>{formatPrice(min_price_per_hour, max_price_per_hour)}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={styles.itemName}
            numberOfLines={1}
          >
            {name.fi}
          </Text>
          <Text style={styles.itemLocation}>{unit.name.fi}</Text>
          <View style={styles.itemFooter}>
            <View style={[styles.availabilityContainer, (reservable && opening_hours && opening_hours[0].opens) ? styles.available : styles.disabled]}>
              <Text style={styles.availabilityText}>{ isResourceReservable(props.item) ? 'VAPAA' : 'SULJETTU'}</Text>
            </View>
            <Text style={styles.typeText}>{type.name.fi}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResourceListItem;
