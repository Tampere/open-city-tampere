import Onboarding from 'src/components/Onboarding';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import {
  createSingleChoiceStep,
  createMultiChoiceStep,
  ChoiceView,
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

const ListChoiceView = withProps({ mode: 'list' })(ChoiceView);
const GridChoiceView = withProps({ mode: 'grid' })(ChoiceView);

let LanguageStep = createSingleChoiceStep(ListChoiceView, (profile) => {
  if (profile.locale) {
    i18n.changeLanguage(profile.locale);
  }
});
LanguageStep = withProps(languageProps)(LanguageStep);
LanguageStep = translate('languageStep')(LanguageStep);
const MultiChoiceStep = createMultiChoiceStep(GridChoiceView);
const SingleChoiceStep = createSingleChoiceStep(ListChoiceView);
let UserTypeStep: React.ComponentType<any> = withProps(userTypeProps)(SingleChoiceStep);
UserTypeStep = translate('userTypeStep')(UserTypeStep);
let InterestStep: React.ComponentType<any> = withProps(interestProps)(MultiChoiceStep);
InterestStep = translate('interestStep')(InterestStep);

const steps = {
  steps: [LanguageStep, UserTypeStep, InterestStep],
};

const MyOnboarding = withProps(steps)(Onboarding);

export default MyOnboarding;
