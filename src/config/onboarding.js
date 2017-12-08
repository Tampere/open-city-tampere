import Onboarding from 'src/components/Onboarding';
import { translate } from 'react-i18next';
import { withProps } from 'recompose';
import { SingleChoiceStep, MultiChoiceStep } from 'open-city-modules';

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

const userTypeProps = {
  choiceKey: 'userType',
  options: userTypeOptions,
  ns: 'userTypeStep',
};
const interestProps = {
  choiceKey: 'interests',
  options: interestOptions,
  ns: 'interestStep',
};

let UserTypeStep: React.ComponentType<any> = withProps(userTypeProps)(SingleChoiceStep);
UserTypeStep = translate()(UserTypeStep);
let InterestStep: React.ComponentType<any> = withProps(interestProps)(MultiChoiceStep);
InterestStep = translate()(InterestStep);

const steps = {
  steps: [UserTypeStep, InterestStep],
};

const MyOnboarding = withProps(steps)(Onboarding);

export default MyOnboarding;
