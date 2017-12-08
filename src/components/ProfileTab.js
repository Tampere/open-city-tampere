/* @flow */
import React from 'react';
import {
  View,
  Text,
  Button,
  Picker,
  StyleSheet,
} from 'react-native';
import { type Profile } from 'src/types';

import colors from 'src/config/colors';

type ChoiceListProps = {
  title: string,
  choices: Array<string>,
};

let styles;

const ChoiceList = (props: ChoiceListProps) => (
  <View>
    <Text style={styles.text}>{props.title}</Text>
    { props.choices.map(item => <Text style={styles.text} key={item}>• {item}</Text>) }
  </View>
);

type Props = {
  screenProps: {
    profile: Profile,
    restartOnboarding: () => void,
  },
  t: string => string,
  i18n: any,
}

const ProfileTab = (props: Props) => {
  const { profile } = props.screenProps;
  const { restartOnboarding } = props.screenProps;
  const { t, i18n } = props;
  const translatedUserType = t(`userTypeStep:options.${profile.userType}`);
  const translatedInterests = profile.interests.map(value => t(`interestStep:options.${value}`));
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${t('userType')}: ${translatedUserType}`}</Text>
      <ChoiceList title={`${t('interests')}:`} choices={translatedInterests} />
      <View style={styles.button}>
        <Button onPress={restartOnboarding} title={t('restartOnboarding')} />
      </View>
      <View style={styles.changeLanguage}>
        <Text style={styles.text}>{t('changeLanguage')}</Text>
        <Picker
          selectedValue={i18n.language}
          onValueChange={value => i18n.changeLanguage(value)}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Suomi" value="fi" />
        </Picker>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.max,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 20,
  },
  changeLanguage: {
    alignSelf: 'stretch',
  },
});

export default ProfileTab;
