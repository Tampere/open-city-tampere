
# Open City Skeleton

Open City Skeleton is a reusable React Native application skeleton for creating Open City Apps with whitelabel-model.
This repository includes the RN project structure and implements fundamental parts of the application, including UI flow.
Open City Modules (https://github.com/6aika/open-city-modules) are separate packages that implement some specific functionality and can be installed to the derivate app.

Open City Skeleton and Open City Modules have been developed using:

`"react": "16.0.0"`

`"react-native": "0.50.3"`


## Features

- Onboarding flow (Stack navigation)
  - Navigation through configured onboarding steps. (https://github.com/6aika/open-city-modules) includes views to create customized views for:
    - Splash screen
    - Single choice selection (eg language selection)
    - Multichoice selection (eg interests)
- Module UI (Tab Navigation)
    - Modules, default one from (https://github.com/6aika/open-city-modules) or custom ones,  are shown as tabs
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
In `src/config/colors.js` change the `max, med, min` values of the `colors` object.

More colors can also be added to the object to be used in custom components and modules.


### Configuration
Onboarding, tabs, headers, translations and navigation components can be configured with the above instructios and by modifying the `App.js` file.

To configurate open-city-modules, check the documentation for each module found in the [`open-city-modules` repository](https://github.com/6aika/open-city-modules).


## Contributing to open-city-skeleton and open-city-modules 
If you've built a new module or feature that you think would support the two base projects, you can merge the changes in the `skeleton` branch of your forked repository and send a pull request for your changes. If you want to build new modules to your application only, you could fork the modules repository and create a new module there or then just create the needed components straight to your forked project, just as in any other normal React Native project.


### Step-by-step tutorial for a new Open City App

This step-by-step tutorial's purpose is to help developers to start developing their new application using the configurable open city skeleton and modules. 

In this example we're using the open-city-skeleton as the base for the project and using two modules, HomeView module and Feedback module.

* Fork the `open-city-skeleton` repository
*  Create a new branch named `skeleton`. This branch should have the `open-city-skeleton` repository as upstream, so skeleton updates can be pulled to the branch and merged to the forked application.
* Globally install [`react-native-rename`](https://www.npmjs.com/package/react-native-rename) package to rename the name and bundle identifier of the application.
* Run `npm install`(note: Always use npm instead of yarn on `open-city-app` projects.)
* Modules might have native dependencies which have to be manually installed to the base project. See [`open-city-modules` repository](https://github.com/6aika/open-city-modules) for instructions how to install native dependencies and customize each module.
  * In this case the Feedback and Homeview modules have the following native dependencies:
    - [react-native-maps](https://github.com/react-community/react-native-maps)
    - [react-native-image-picker](https://github.com/react-community/react-native-image-picker)
    - [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer)

* We add these packages as dependencies to our project with `npm install --save <package>`
* After that we run `react-native link` to link the native dependencies.
* To start using a module, just import it from the installed `open-city-modules` package:

```
import { FeedbackModule, configureFeedback, HomeViewModule } from 'open-city-modules';
```

Modules can be added as a tab in the following way:

```
/* src/config/tabs.js */

const tabs = {
  HomeView: {
    screen: withProps({})(HomeViewModule),
    navigationOptions: () => ({
      title: 'Koti',
      tabBarIcon: iconProvider('home'),
    }),
  },
  Feedback: {
    screen: withProps({ showSubHeader: false })(FeedbackModule),
    navigationOptions: () => ({
      title: i18n.t('tabs:feedback'),
      tabBarIcon: iconProvider('history'),
    }),
  },
};
```

To configure each module, we check the default configuration for the module shown in [`open-city-modules` documentation](https://github.com/6aika/open-city-modules). Copy the default config and create a new file named e.g. `feedbackConfig.json`. In the file you can change module settings you wish to override by using the `configureFeedback` function we imported earlier:

```
import feedbackConfig from './feedbackConfig.json'

configureFeedback(feedbackConfig)
```

Then we can set the default colors for our application in `src/config/colors.js`.

Just change the `max, med, min` values in the `colors` object. The default modules support only three main colors, but you could add other theme colors too for your own modules you create.

FeedbackModule uses `react-native-maps` Google Maps to show the map for the user, which means we have to create a new API key foor Google Maps API and add it to `AndroidManifest.xml` as shown [here](https://developers.google.com/maps/documentation/ios-sdk/get-api-key)

Run the project with `react-native run-android`
