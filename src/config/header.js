import React from 'react';
import { Header } from 'open-city-modules/src/components';
import img from 'TampereApp/img/city.png';
import colors from 'src/config/colors';

const MyHeader = (props) => {
  const { defaultRightAction, bgColor = colors.min, fgColor = colors.max } = props;
  return (
    <Header
      title="Tampere App"
      style={{ backgroundColor: bgColor }}
      titleStyle={{ color: fgColor }}
      rightAction={{
        icon: img,
        style: { tintColor: fgColor },
        action: defaultRightAction,
      }}
      {...props}
    />
  );
};

export default MyHeader;
