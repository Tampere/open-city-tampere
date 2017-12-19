import React from 'react';
import { Header } from 'open-city-modules/src/components';
import img from 'TampereApp/img/city.png';
import colors from 'src/config/colors';

const MyHeader = (props) => {
  const { defaultRightAction } = props;
  return (
    <Header
      title="Tampere App"
      rightAction={{
        icon: img,
        style: { tintColor: colors.max },
        action: defaultRightAction,
      }}
      {...props}
    />
  );
};

export default MyHeader;
