/* @flow */
import { AsyncStorage } from 'react-native';
import config from 'src/config.json';
import { type Profile } from 'src/types';

const key = `@${config.asyncStoragePrefix}:profile`;

export const saveProfile = async (profile: Profile) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(profile));
  } catch (error) {
    console.error(`Error saving profile to AsyncStorage: ${e.name}: ${e.message}`);
  }
};

export const loadProfile = async () => {
  try {
    const valueJSON: string = await AsyncStorage.getItem(key);
    return JSON.parse(valueJSON);
  } catch (error) {
    console.error(`Error fetching profile from AsyncStorage: ${e.name}: ${e.message}`);
    return null;
  }
};

export const deleteProfile = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error deleting profile from AsyncStorage: ${e.name}: ${e.message}`);
  }
};
