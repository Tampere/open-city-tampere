import { withProps } from 'recompose';

import arrowBack from 'open-city-modules/img/arrow_back.png';
import colors from 'src/config/colors';

export const withBackButton = navigation => withProps({
  leftAction: {
    icon: arrowBack,
    style: { tintColor: colors.max },
    action: () => navigation.goBack(),
  },
});
