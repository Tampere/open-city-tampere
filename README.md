
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
TODO


### Tab navigation
TODO


### City selection
TODO


### Profile
TODO



## Usage

To start using skeleton codebase, fork this repository to make an new one for whitelabeled product.
It is advisable to keep Skeleton vanilla code in separate branch, named "skeleton" for example.
This way it's easier to pull changes to skeleton and merge to feature/master branch of the product repo.
Also bugfixes etc are easier to contribute upstream.


### Theming and UI customization
TODO


### Configuration
TODO


## Contributing
TODO
