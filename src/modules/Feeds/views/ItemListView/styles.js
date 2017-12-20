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
  listContainer: {
    paddingTop: 30,
  },
  listItem: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  listItemTitle: {
    color: colors.med,
    fontSize: 18,
  },
  listItemDate: {
    color: colors.max,
  },
  header: {
    backgroundColor: colors.max,
  },
  headerTitle: {
    color: colors.min,
  },
});

export default styles;
