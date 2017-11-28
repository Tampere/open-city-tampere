/* @flow */
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import { cloneDeep } from 'lodash';
import OptionButton from 'src/OnboardingSteps/components/OptionButton';
import colors, { type ColorSet } from 'src/colors';
// An onboarding step component where the user can select one option from many

type Profile = {[string]: mixed};

type Props = {
  next: Profile => void, // provided by Onboarding
  previous: Profile => void, // provided by Onboarding
  profile: Profile, // provided by Onboarding
  // step: number,
  // totalSteps: number,
  // colors: ColorSet,
  // locale: string,
  options: Array<{value: string, label: string}>,
    // array of options, value is saved to the profile object, label is the text shown on button
  choiceKey: string, // choice is saved in the profile object with this key as the property name
  title: string,
  question: ?string,
};

type State = {
  selectedOption: ?string,
};

let styles;

export default class SingleChoiceStep extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const selectedOption = props.profile[props.choiceKey] || null;
    if (typeof selectedOption === 'string') {
      this.state = {
        selectedOption,
      };
    } else {
      console.log(`Profile attribute '${props.choiceKey}' has invaild type
        '${typeof selectedOption}'. Expected a string. Overwriting.`);
      this.state = {
        selectedOption: null,
      };
    }
  }

  select = (option: string) => {
    this.setState({ selectedOption: option });
  }

  handleNextPress = () => {
    const newProfile: Profile = cloneDeep(this.props.profile);
    newProfile[this.props.choiceKey] = this.state.selectedOption;
    this.props.next(newProfile);
  }

  handlePreviousPress = () => {
    const newProfile: Profile = cloneDeep(this.props.profile);
    delete newProfile[this.props.choiceKey];
    this.props.previous(newProfile);
  }

  render() {
    const {
      options, title, question,
    } = this.props;
    const { selectedOption } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.question}>{question}</Text>
          { options.map(option => (
            <OptionButton
              key={option.value}
              label={option.label}
              onPress={() => this.select(option.value)}
              selected={selectedOption === option.value}
              style={styles.button}
            />
          ))}
        </ScrollView>
        <View style={styles.bottomBar}>
          <Button
            onPress={this.handlePreviousPress}
            title="Edellinen"
          />
          <Button
            disabled={!selectedOption}
            onPress={this.handleNextPress}
            title="Valmis"
          />
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.min,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: colors.max,
    textAlign: 'center',
    marginVertical: 20,
  },
  question: {
    fontSize: 20,
    color: colors.max,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
  },
  bottomBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.med,
  },
});
