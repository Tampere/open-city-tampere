/* @flow */
import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { translate } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'src/config/colors';

const data = [
  {
    name: 'Helsinki',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=helsinki',
  },
  {
    name: 'Espoo',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=espoo',
  },
  {
    name: 'Jyväskylä',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=jyväskylä',
  },
  {
    name: 'Kuopio',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=kuopio',
  },
  {
    name: 'Lahti',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=lahti',
  },
  {
    name: 'Oulu',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=oulu',
  },
  {
    name: 'Pori',
    launchUrl: 'hkiapp://',
    storeUrl: 'market://search?q=pori',
  },
];

type Props = {
  visible: boolean,
  cities: Array<{name: string, launchUrl: string, storeUrl: string}>,
  onClose: () => void,
  t: string => string,
};

let styles;

const handleCityPress = (launchUrl: string, storeUrl: string) => {
  Linking.canOpenURL(launchUrl).then((supported) => {
    if (!supported) {
      Linking.openURL(storeUrl);
    } else {
      Linking.openURL(launchUrl);
    }
  });
};

const CityChangeModal = (props: Props) => {
  const { t } = props;
  return (
    <Modal visible={props.visible} transparent onRequestClose={props.onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('city-change-title').toUpperCase()}</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleCityPress(item.launchUrl, item.storeUrl)}
            >
              <View style={styles.cityRow}>
                <Icon name="city" size={40} color={colors.max} />
                <Text style={styles.cityLabel}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Button onPress={props.onClose} title="Peruuta" />
      </View>
    </Modal>
  );
};

styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 15,
    padding: 15,
    flex: 1,
    backgroundColor: colors.min,
  },
  title: {
    fontSize: 20,
    color: colors.max,
  },
  cityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  cityLabel: {
    marginLeft: 10,
    fontSize: 20,
    color: colors.max,
  },
});

export default translate()(CityChangeModal);
