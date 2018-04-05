import { Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const windowWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonStyle: {
    width: windowWidth / 4,
    backgroundColor: '$colors.med',
    borderRadius: 10,
    margin: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    padding: 8,
    color: '$colors.min'
  }
});

export default styles;
