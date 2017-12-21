/* @flow */
import { AsyncStorage } from 'react-native';
import config from 'src/config/config.json';
import { type Profile } from 'src/types';
import i18n from 'src/config/translations';

const key = `@${config.asyncStoragePrefix}:profile`;

export const saveProfile = async (profile: Profile) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(profile));
  } catch (e) {
    console.error(`Error saving profile to AsyncStorage: ${e.name}: ${e.message}`);
  }
};

export const loadProfile = async () => {
  try {
    const valueJSON: string = await AsyncStorage.getItem(key);
    const profile = JSON.parse(valueJSON);
    if (profile.locale) {
      i18n.changeLanguage(profile.locale);
    }
    return profile;
  } catch (e) {
    console.error(`Error fetching profile from AsyncStorage: ${e.name}: ${e.message}`);
    return null;
  }
};

export const deleteProfile = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(`Error deleting profile from AsyncStorage: ${e.name}: ${e.message}`);
  }
};
