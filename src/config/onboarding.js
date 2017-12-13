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
import finlayson from 'TampereApp/img/areas/finlayson.png';
import finlaysonGrey from 'TampereApp/img/areas/finlayson_grey.png';
// Options (choices) for steps. Each option creates a new button.
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
const areaOptions = [
  { value: 'tammela', image: finlaysonGrey, imageSelected: finlayson },
  { value: 'tahmela', image: finlaysonGrey, imageSelected: finlayson },
  { value: 'keskusta', image: finlaysonGrey, imageSelected: finlayson },
  { value: 'ratina', image: finlaysonGrey, imageSelected: finlayson },
  { value: 'pispala', image: finlaysonGrey, imageSelected: finlayson },
  { value: 'finlayson', image: finlaysonGrey, imageSelected: finlayson },
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
const areaProps = {
  choiceKey: 'areas',
  options: areaOptions,
};

const listButtonProps = {
  containerStyle: {
    borderWidth: 2,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: colors.min,
    backgroundColor: colors.max,
    marginBottom: 10,
  },
  containerSelectedStyle: {
    borderColor: colors.med,
    backgroundColor: colors.med,
  },
  labelStyle: {
    color: colors.min,
  },
  labelSelectedStyle: {
    color: colors.min,
  },
};

const interestButtonProps = {
  labelStyle: {
    color: colors.min,
  },
  labelSelectedStyle: {
    color: colors.min,
  },
  containerStyle: {
    backgroundColor: 'transparent',
  },
  containerSelectedStyle: {
    borderColor: colors.min,
  },
  iconColor: colors.min,
  iconSelectedColor: colors.min,
};

const areaButtonProps = {
  labelStyle: {
    color: colors.min,
  },
  labelSelectedStyle: {
    color: colors.yellow,
  },
  containerStyle: {
    backgroundColor: 'transparent',
  },
  containerSelectedStyle: {
    borderColor: 'transparent',
  },
};

const containerStyle = { backgroundColor: colors.max };
const questionStyle = { color: colors.min };

const ListChoiceView = withProps({
  mode: 'list',
  buttonProps: listButtonProps,
  containerStyle,
  questionStyle,
})(ChoiceView);
const InterestChoiceView = withProps({
  mode: 'grid',
  buttonProps: interestButtonProps,
  containerStyle,
  questionStyle,
})(ChoiceView);
const AreaChoiceView = withProps({
  mode: 'grid',
  buttonProps: areaButtonProps,
  containerStyle,
  questionStyle,
})(ChoiceView);

let LanguageStep = createSingleChoiceStep(ListChoiceView, (profile) => {
  if (profile.locale) {
    i18n.changeLanguage(profile.locale);
  }
});
LanguageStep = withProps(languageProps)(LanguageStep);
LanguageStep = translate('languageStep')(LanguageStep);
const InterestChoiceStep = createMultiChoiceStep(InterestChoiceView);
const AreaChoiceStep = createMultiChoiceStep(AreaChoiceView);
const SingleChoiceStep = createSingleChoiceStep(ListChoiceView);
let UserTypeStep = withProps(userTypeProps)(SingleChoiceStep);
UserTypeStep = translate('userTypeStep')(UserTypeStep);
let InterestStep = withProps(interestProps)(InterestChoiceStep);
InterestStep = translate('interestStep')(InterestStep);
let AreaStep = withProps(areaProps)(AreaChoiceStep);
AreaStep = translate('areaStep')(AreaStep);

const steps = {
  steps: [LanguageStep, UserTypeStep, InterestStep, AreaStep],
};

const MyOnboarding = withProps(steps)(Onboarding);

export default MyOnboarding;
