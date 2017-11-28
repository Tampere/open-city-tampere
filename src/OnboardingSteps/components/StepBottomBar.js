/* @flow */
import React from 'react';
import {
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { translate } from 'react-i18next';

import colors from 'src/colors';

let styles;

type Props = {
  onPreviousPress: () => void,
  onNextPress: () => void,
  nextDisabled: boolean,
  i18n: any,
  t: any,
};

const StepBottomBar = (props: Props) => {
  const { t, i18n } = props;
  return (
    <View style={styles.bottomBar}>
      <Button
        onPress={props.onPreviousPress}
        title={t('previous')}
      />
      <Button
        onPress={() => i18n.changeLanguage('fi')}
        title="Finnish"
      />
      <Button
        onPress={() => i18n.changeLanguage('en')}
        title="English"
      />
      <Button
        disabled={props.nextDisabled}
        onPress={props.onNextPress}
        title={t('next')}
      />
    </View>
  );
};

styles = StyleSheet.create({
  bottomBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.med,
  },
});

export default translate()(StepBottomBar);
