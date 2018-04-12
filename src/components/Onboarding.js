/* @flow */
import * as React from 'react';

import colors, { type ColorSet } from 'src/config/colors';
import { type Profile } from 'src/types';
import AuthStep from 'src/components/AuthStep';
import { updateProfile } from 'src/profile'
import { doAuth } from 'src/utils/auth';
const locale = 'fi';

/*
  Receives steps as an array of components.
  Keeps the index of current step and data given by the user in its state.
  Renders the current step which gets the following props:
    next: a function that takes a profile object as an argument and goes to the next step
    previous: a function that goes to the previous step
    profile: object that contains data given so far
    step: index of the current step (0 .. totalSteps-1)
    totalSteps: total number of steps in onboarding
  Takes onFinish callback as a prop, which is called with the final profile object at
  the end of the last step.
*/

export type StepProps = {
  next: Profile => void,
  previous: Profile => void,
  profile: Profile,
  step: number,
  totalSteps: number,
  colors: ColorSet,
  locale: string,
};

type Props = {
  onFinish: Profile => void,
  steps: Array<React.ComponentType<StepProps>>,
  splash?: React.ComponentType<any>,
};

type State = {
  showSplash: boolean,
  step: number,
  profile: Profile,
};

export default class Onboarding extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showSplash: true,
      step: 0,
      profile: {},
    };
  }


  next = (profile: Profile) => {
    const { step } = this.state;
    if (step === this.props.steps.length - 1) {
      this.props.onFinish(profile);
      return;
    }
    this.setState({ step: step + 1, profile });
  }

  previous = (profile: Profile) => {
    const { step } = this.state;
    if (step > 0) {
      this.setState({ step: step - 1, profile });
    }
  }

  dismissSplash = () => this.setState({ showSplash: false });

  render() {
    const { step } = this.state;
    const CurrentStep = this.props.steps[step];
    const stepProps = {
      next: this.next,
      previous: this.previous,
      profile: this.state.profile,
      step: this.state.step,
      totalSteps: this.props.steps.length,
      colors,
      locale,
    };
    const Splash = this.props.splash;
    if (this.state.showSplash && Splash) {
      return <Splash dismiss={this.dismissSplash} />;
    }
    return <CurrentStep {...stepProps} />;
  }
}
