// @flow
import * as React from 'react';

import colors from 'src/colors';

const locale = 'fi';

/*
  Takes steps as children.
  Keeps the index of current step and data given by the user in its state.
  Renders the current step which gets the following props:
    next: a function that takes a profile object as an argument and goes to the next step
    previous: a function that goes to the previous step
    profile: object that contains data given so far
    step: index of the current step (0 .. totalSteps-1)
    totalSteps: total number of steps in onboarding
  Takes onFinish callback as a prop, which is called with the final profile object at
  the end of the last step.

  TODO: define the shape of the profile object somewhere instead of using any
*/

type Profile = any;

type Props = {
  onFinish: (Profile) => void,
  children: React.ChildrenArray<React.Element<any>>,
};

type State = {
  step: number,
  profile: Profile,
};

export default class Onboarding extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      step: 0,
      profile: {},
    };
  }

  get totalSteps() {
    return React.Children.count(this.props.children);
  }

  next = (profile: Profile) => {
    const { step } = this.state;
    if (step === this.totalSteps - 1) {
      this.props.onFinish(profile);
      return;
    }
    this.setState({ step: step + 1, profile });
  }

  previous = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  render() {
    const { step } = this.state;
    const childrenArray: Array<React.Element<any>>
      = React.Children.toArray(this.props.children);
    const currentStep = childrenArray[step];
    const stepProps = {
      next: this.next,
      previous: this.previous,
      profile: this.state.profile,
      step: this.state.step,
      totalSteps: this.totalSteps,
      colors,
      locale,
    };
    const currentStepWithProps: React.Element<any> = React.cloneElement(currentStep, stepProps);
    return currentStepWithProps;
  }
}
