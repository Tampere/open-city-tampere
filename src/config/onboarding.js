import Onboarding from 'src/components/Onboarding';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import {
  createSingleChoiceStep, SingleChoiceView,
  createMultiChoiceStep, MultiChoiceView,
} from 'open-city-modules';
import i18n from 'src/config/translations';

const languageOptions = [
  { value: 'fi' },
  { value: 'sv' },
  { value: 'en' },
];
const userTypeOptions = [
  { value: 'local' },
  { value: 'visitor' },
];
const interestOptions = [
  { value: 'restaurants' },
  { value: 'movies' },
  { value: 'family' },
  { value: 'health' },
  { value: 'cityPlanning' },
  { value: 'exercise' },
];

const languageProps = {
  choiceKey: 'locale',
  options: languageOptions,
};
const userTypeProps = {
  choiceKey: 'userType',
  options: userTypeOptions,
};
const interestProps = {
  choiceKey: 'interests',
  options: interestOptions,
};

let LanguageStep = createSingleChoiceStep(SingleChoiceView, (profile) => {
  if (profile.locale) {
    i18n.changeLanguage(profile.locale);
  }
});
LanguageStep = withProps(languageProps)(LanguageStep);
LanguageStep = translate('languageStep')(LanguageStep);
const MultiChoiceStep = createMultiChoiceStep(MultiChoiceView);
const SingleChoiceStep = createSingleChoiceStep(SingleChoiceView);
let UserTypeStep: React.ComponentType<any> = withProps(userTypeProps)(SingleChoiceStep);
UserTypeStep = translate('userTypeStep')(UserTypeStep);
let InterestStep: React.ComponentType<any> = withProps(interestProps)(MultiChoiceStep);
InterestStep = translate('interestStep')(InterestStep);

const steps = {
  steps: [LanguageStep, UserTypeStep, InterestStep],
};

const MyOnboarding = withProps(steps)(Onboarding);

export default MyOnboarding;
