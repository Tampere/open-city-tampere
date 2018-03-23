import Onboarding from 'src/components/Onboarding';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import React, { Component}  from 'react';
import {
  createSingleChoiceStep,
  createMultiChoiceStep,
  ChoiceView,
  SplashScreen,
} from 'open-city-modules';
import { View, Text } from 'react-native';
import AuthView from 'src/components/AuthStep';
import i18n from 'src/config/translations';
import colors from 'src/config/colors';
import finlayson from 'TampereApp/img/areas/finlayson.png';
import finlaysonGrey from 'TampereApp/img/areas/finlayson_grey.png';
import bg1 from 'TampereApp/img/background/bg1.png';
import bg2 from 'TampereApp/img/background/bg2.png';
// eslint-disable-next-line camelcase
import bg3_4 from 'TampereApp/img/background/bg3_4.png';
import bgSplash from 'TampereApp/img/background/bg_front.png';
import logo from 'TampereApp/img/tre_vaakuna.png';

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

// Props for step components
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
const authProps = {
  choiceKey: 'auth',
  options: [],
};


// Styling props for view components
const listButtonProps = {
  containerStyle: {
    borderWidth: 2,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: colors.min,
    backgroundColor: 'transparent',
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
    color: colors.yellow,
  },
  containerStyle: {
    backgroundColor: 'transparent',
  },
  containerSelectedStyle: {
    borderColor: 'transparent',
  },
  iconColor: colors.min,
  iconSelectedColor: colors.yellow,
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
const bottomBarProps = { fgColor: colors.min, bgColor: 'transparent' };

const ListChoiceView = withProps({
  mode: 'list',
  buttonProps: listButtonProps,
  containerStyle,
  questionStyle,
  marginTopMultiplier: 0.7,
  bottomBarProps,
})(ChoiceView);
const LanguageView = withProps({
  bgImage: bg1,
})(ListChoiceView);
const UserTypeView = withProps({
  bgImage: bg2,
})(ListChoiceView);
const InterestChoiceView = withProps({
  mode: 'grid',
  buttonProps: interestButtonProps,
  containerStyle,
  contentStyle: { paddingTop: 30 },
  questionStyle,
  bgImage: bg3_4,
  bottomBarProps,
})(ChoiceView);
const AreaChoiceView = withProps({
  mode: 'grid',
  buttonProps: areaButtonProps,
  containerStyle,
  contentStyle: { paddingTop: 30 },
  questionStyle,
  bgImage: bg3_4,
  bottomBarProps,
})(ChoiceView);
const AuthStepView = withProps({
  mode: 'custom',
  buttonProps: areaButtonProps,
  containerStyle,
  contentStyle: { paddingTop: 30 },
  questionStyle,
  bgImage: bg3_4,
  bottomBarProps,
  customView: <AuthView/>,
})(ChoiceView);

let LanguageStep = createSingleChoiceStep(LanguageView, (profile) => {
  if (profile.locale) {
    i18n.changeLanguage(profile.locale);
  }
});
LanguageStep = withProps(languageProps)(LanguageStep);
LanguageStep = translate('languageStep')(LanguageStep);

let UserTypeStep = createSingleChoiceStep(UserTypeView);
UserTypeStep = withProps(userTypeProps)(UserTypeStep);
UserTypeStep = translate('userTypeStep')(UserTypeStep);

let InterestStep = createMultiChoiceStep(InterestChoiceView);
InterestStep = withProps(interestProps)(InterestStep);
InterestStep = translate('interestStep')(InterestStep);

let AreaStep = createMultiChoiceStep(AreaChoiceView);
AreaStep = withProps(areaProps)(AreaStep);
AreaStep = translate('areaStep')(AreaStep);

let AuthStep = createMultiChoiceStep(AuthStepView);
AuthStep = withProps(authProps)(AuthStep);
AuthStep = translate('authStep')(AuthStep);


const MySplash = withProps({
  bgImage: bgSplash,
  logo,
  cityName: 'TAMPERE',
  welcomeText: 'Tervetuloa käyttämään kaupunkisovellusta',
  beginText: 'ALOITA',
  textColor: 'white',
  marginTopMultiplier: 1.15,
})(SplashScreen);
const onboardingProps = {
  splash: MySplash,
  steps: [LanguageStep, UserTypeStep, InterestStep, AreaStep, AuthStep],
};

const MyOnboarding = withProps(onboardingProps)(Onboarding);

export default MyOnboarding;
