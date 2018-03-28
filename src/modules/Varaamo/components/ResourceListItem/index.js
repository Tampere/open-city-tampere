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
    return '0,00 €/h'
  }
}

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
  } = props.item;
  const imageUrl = images.length > 0 && images[0].url;
  return (
    <TouchableWithoutFeedback
      onPress={() => console.warn(name.fi)}
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
            <View style={[styles.availabilityContainer, reservable ? styles.available : styles.disabled]}>
              <Text style={styles.availabilityText}>{ reservable ? 'VAPAA' : 'VARATTU'}</Text>
            </View>
            <Text style={styles.typeText}>{type.name.fi}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResourceListItem;
