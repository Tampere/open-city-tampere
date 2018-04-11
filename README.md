
# Open City Tampere

Open City Tampere is white-labeled application for City of Tampere developed on [`open-city-skeleton` repository](https://github.com/6aika/open-city-skeleton).

Open City Tampere has been developed using:

`"react": "16.0.0"`

`"react-native": "0.50.3"`

## Usage

To start using codebase, clone this repository.
It is advisable to keep Skeleton vanilla code in separate branch, named "skeleton" for example.
This way it's easier to pull changes to skeleton and merge to feature/master branch of the product repo.
Also bugfixes etc are easier to contribute upstream.


### Step-by-step tutorial to develop Open City Tampere

Pre-install requirements:
  - React Native https://facebook.github.io/react-native/docs/getting-started.html
  - Android SDK Build-Tools version `25.0.1`
  - Android emulator or device running version 4.1.2 or higher
  - Xcode version 8.0 or higher
  - iOS simulator or device runnin version 8.0 or higher

This step-by-step tutorial's purpose is to help developers to start developing Open City Tampere application. Check instructios on [`open-city-skeleton` repository](https://github.com/6aika/open-city-skeleton) how to develop new white-labeled application based on Open City Skeleton.

* Clone the `open-city-tampere` repository
  `git clone https://github.com/Tampere/open-city-tampere.git`

* Run `npm install`(note: Always use npm instead of yarn on `open-city-tampere` project.)

* FeedbackModule uses `react-native-maps` Google Maps to show the map for the user, which means we have to create a new API key foor Google Maps API and add it to `AndroidManifest.xml` as shown [here](https://developers.google.com/maps/documentation/ios-sdk/get-api-key)

* Run the project with `react-native run-android`


## Architecture

![Architecture](../develop/doc/open-city-tampere-general-architecture.png)


## Basic functionalities

### Theming and UI customization
In `src/config/colors.js` change the `max, med, min` values of the `colors` object.

More colors can also be added to the object to be used in custom components and modules.

Default colors for City of Tampere are:
```
/* src/config/colors.js */
max: '#36363F',
med: '#D45049',
min: '#FFFFFF',
```


### Configuration
Onboarding, tabs, headers, translations and navigation components can be configured with the above instructios and by modifying the `App.js` file.

To configure each module, check the default configuration for the module shown in [`open-city-modules` documentation](https://github.com/6aika/open-city-modules). In the file you can change module settings you wish to override by using for example `configureFeedback` function:

```
import feedbackConfig from './feedbackConfig.json'

configureFeedback(feedbackConfig)
```


## Functionalities in Open City Tampere
- Onboarding flow (Stack navigation)
  - Navigation through configured onboarding steps. (https://github.com/6aika/open-city-modules) includes views to create customized views for:
    - Splash screen
    - Single choice selection (eg language selection)
    - Multichoice selection (eg interests)
- Module UI (Tab Navigation)
    - HomeViewModule
      - LinkedEvents http://linkedevents.tampere.fi/
      - RSS Reader https://www.tampere.fi/tampereen-kaupunki/ajankohtaista/
    - FeedBackModule
      - Open311 API [http://feedback.tampere.fi/](feedback.tampere.fi/)
    - Profile
      - shows the choices made in the onboarding
      - Login with Tunnistamo
    - VaraamoModule
      - https://varaamo.tampere.fi/.
- City selection
    - Possibility for user to change active city by switching using another Open City App derivate application. Selection launches the desired app, if installed, otherwise market application for download.
- Tunnistamo


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


### Tunnistamo

Skeleton layer provides functions to communicate with Tunnistamo API and saving authorization details to the device

Tunnistamo API endpoint is https://auth.tampere.fi/


### Varaamo

Users can reserve resources from VaraamoModule
Varaamo depends on Tunnistamo and Respa https://respa.tampere.fi/v1/


### Troubleshooting

* Modules might have native dependencies which have to be manually installed to the base project. See [`open-city-modules` repository](https://github.com/6aika/open-city-modules) for instructions how to install native dependencies and customize each module.
  * In this case the Feedback and Homeview modules have the following native dependencies:
    - [react-native-maps](https://github.com/react-community/react-native-maps)
    - [react-native-image-picker](https://github.com/react-community/react-native-image-picker)
    - [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer)

* If npm install fails to install above packages install them manually using `npm install --save <package>`
* After that run `react-native link` to link the native dependencies.

### Contributing to open-city-skeleton and open-city-modules
If you've built a new module or feature that you think would support the two base projects, you can merge the changes in the `skeleton` branch of your forked repository and send a pull request for your changes. If you want to build new modules to your application only, you could fork the modules repository and create a new module there or then just create the needed components straight to your forked project, just as in any other normal React Native project.

instructions to add vanilla skeleton branch:
* Add Open City Skeleton as remote repository
  `git remote add <remote-name> git@github.com:6aika/open-city-skeleton.git`
* Run `git fetch <remote-name>`
*  Create a new branch named `skeleton` from your local `master`. This branch should have the `open-city-skeleton` repository as upstream, so skeleton updates can be pulled to the branch and merged to the cloned application.
  - `git branch --set-upstream skeleton <remote-name>/master`
