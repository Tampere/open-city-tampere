import { withProps } from 'recompose';

import arrowBack from 'open-city-modules/img/arrow_back.png';
import colors from 'src/config/colors';

// eslint-disable-next-line import/prefer-default-export
export const withBackButton = (navigation, tintColor = colors.max) => withProps({
  leftAction: {
    icon: arrowBack,
    style: { tintColor },
    action: () => navigation.goBack(),
  },
});
