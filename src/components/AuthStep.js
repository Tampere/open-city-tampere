/* @flow */
import * as React from 'react';
import {
  View,
  Text,
  Button,
  Picker,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { type Profile } from 'src/types';
import { doAuth } from 'src/utils/auth';
import { updateProfile } from 'src/profile';
import colors from 'src/config/colors';

let styles;

const authorize = async () => {
  try {
    const authorization = await doAuth();
    updateProfile({ auth: authorization });
  } catch (error) {
    console.error(error);
  }
}
const AuthStep = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>Kirjautumalla sisään pääset varaamaan tiloja ja voit muuttaa älypuhelimesi kirjastokortiksi.</Text>
      <Text style={styles.body}>Voit käyttää sovellusta myös kirjautumatta</Text>
      <View style={styles.buttonContainer} >
        <TouchableOpacity
          style={styles.button}
          onPress={() => authorize()}
        >
          <View>
            <Text style={styles.buttonText}>Kirjaudu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

};

styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.max,
  },
  body: {
    width: '100%',
    color: colors.min,
    fontSize: 20,
    marginVertical: 16,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    paddingHorizontal: 24,
    backgroundColor: colors.med,
    paddingVertical: 8,
  },
  buttonText: {
    color: colors.min,
    fontSize: 18,
  },
  changeLanguage: {
    alignSelf: 'stretch',
  },
});

export default AuthStep;
