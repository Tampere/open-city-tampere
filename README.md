
# Open City Skeleton

Open City Skeleton is a reusable React Native application skeleton for creating Open City Apps with whitelabel-model.
This repository includes the RN project structure and implements fundamental parts of the application, including UI flow.
Open City Modules (https://github.com/haltu/open-city-modules) are separate packages that implement some specific functionality and can be installed to the derivate app.


## Features

- Onboarding flow (Stack navigation)
  - Navigation through configured onboarding steps. (https://github.com/haltu/open-city-modules) includes views to create customized views for:
    - Splash screen
    - Single choice selection (eg language selection)
    - Multichoice selection (eg interests)
- Module UI (Tab Navigation)
    - Modules, default one from (https://github.com/haltu/open-city-modules) or custom ones,  are shown as tabs
- City selection
    - Possibility for user to change active city by switching using another Open City App derivate application. Selection launches the desired app, if installed, otherwise market application for download.
- Profile


### Onboarding

The `Onboarding` component holds the choices made in the steps so far in its state
and passes it to each step among other props. It receives the steps as an array
of React Components. After the last step, the `onFinish` is called with the final
`profile` object as an argument. When a splash screen is provided, it is shown
before the first step. The first step is shown when the splash screen calls the
`dismiss` function.

The following props are passed to each step component:
* next: (Profile) => void
  - a function that goes to the next step and updates `profile`
* previous: (Profile) => void
  - a function that goes to the previous step and updates `profile`
* profile: Profile
  - The profile object that contains the choices made so far.
* step: number
  - The index of the current step (0..totalSteps-1)
* totalSteps: number
  - The total number of steps.
* colors: ColorSet
* locale: string

An example configuration of the onboarding using the helper HoCs and components
from `open-city-modules` repository can be found in the `config/onboarding.js` file.

### Tab navigation

Each tab receives the `screenProps` props with the following properties:

* colors: ColorSet
* locale: string
* profile: Profile
* restartOnboarding: () => void
  - Can be used to restart the onboarding from within a module
* Header: React.Component<any>
  - The default header which can be used when the module doesn't need to show
  its own header (e.g. for navigation or the title of the current view)

### City selection

The default header has a button that opens a list of other cities' apps.


### Profile

The profile tab shows the choices made in the onboarding.


## Usage

To start using skeleton codebase, fork this repository and make new one for white labeled product.
It is advisable to keep Skeleton vanilla code in separate branch, named "skeleton" for example.
This way it's easier to pull changes to skeleton and merge to feature/master branch of the product repo.
Also bugfixes etc are easier to contribute upstream.


### Theming and UI customization
TODO


### Configuration
TODO


## Contributing
TODO
