import Onboarding from 'src/components/Onboarding';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import {
  createSingleChoiceStep,
  createMultiChoiceStep,
  ChoiceView,
} from 'open-city-modules';
import i18n from 'src/config/translations';
import colors from 'src/config/colors';

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
  { value: 'restaurants', icon: 'silverware' },
  { value: 'movies', icon: 'movie' },
  { value: 'family', icon: 'baby-buggy' },
  { value: 'health', icon: 'hospital' },
  { value: 'cityPlanning', icon: 'city' },
  { value: 'exercise', icon: 'run' },
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

const listButtonProps = {
  containerStyle: {
    borderWidth: 2,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: colors.max,
    backgroundColor: colors.min,
    marginBottom: 10,
  },
  containerSelectedStyle: {
    borderColor: colors.med,
    backgroundColor: colors.med,
  },
  labelStyle: {
    color: colors.max,
  },
  labelSelectedStyle: {
    color: colors.max,
  },
};

const interestButtonProps = {
  labelStyle: {
    color: colors.max,
  },
  labelSelectedStyle: {
    color: colors.max,
  },
  containerSelectedStyle: {
    borderColor: colors.max,
  },
  iconColor: colors.max,
  iconSelectedColor: colors.max,
};
const ListChoiceView = withProps({ mode: 'list', buttonProps: listButtonProps })(ChoiceView);
const GridChoiceView = withProps({ mode: 'grid', buttonProps: interestButtonProps })(ChoiceView);

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
