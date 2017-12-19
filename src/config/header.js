import React from 'react';
import { Header } from 'open-city-modules/src/components';
import img from 'OpenCitySkeleton/img/city.png';
import colors from 'src/config/colors';

const MyHeader = (props) => {
  const { defaultRightAction } = props;
  return (
    <Header
      title="Open City"
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
