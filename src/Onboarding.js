// @flow
import * as React from 'react';

/*
  Takes steps as children.
  Keeps the index of current step and choices made in steps in its state.
  Renders the current step which gets the following props:
    next: a function that takes a choices object as an argument and goes to the next step
    previous: a function that goes to the previous step
    choices: object that contains choices made so far
    step: index of the current step (0 .. totalSteps-1)
    totalSteps: total number of steps in onboarding
  Takes onFinish callback as a prop, which is called with the final choices at
  the end of the last step.

  TODO: define the shape of the choices object somewhere instead of using any
*/

type Props = {
  onFinish: (any) => void,
  children: React.ChildrenArray<React.Element<any>>,
};

type State = {
  step: number,
  choices: any,
};

export default class Onboarding extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      step: 0,
      choices: {},
    };
  }

  get totalSteps() {
    return React.Children.count(this.props.children);
  }

  next = (choices: any) => {
    const { step } = this.state;
    if (step === this.totalSteps - 1) {
      this.props.onFinish(choices);
      return;
    }
    this.setState({ step: step + 1, choices });
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
      choices: this.state.choices,
      step: this.state.step,
      totalSteps: this.totalSteps,
    };
    const currentStepWithProps: React.Element<any> = React.cloneElement(currentStep, stepProps);
    return currentStepWithProps;
  }
}
