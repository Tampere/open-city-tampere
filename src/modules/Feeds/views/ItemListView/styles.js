import EStyleSheet from 'react-native-extended-stylesheet';
import colors from 'src/config/colors';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
  },
  listItemTitle: {
    color: colors.med,
    fontSize: 18,
  },
  listItemDate: {
    color: colors.max,
  },
});

export default styles;
