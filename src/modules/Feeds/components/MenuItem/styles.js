import { StyleSheet } from 'react-native';
import colors from 'src/config/colors';

const ICON_WRAPPER_SIZE = 60;
const ICON_SIZE = 35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.max,
    padding: 25,
    marginHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  iconWrapper: {
    width: ICON_WRAPPER_SIZE,
    height: ICON_WRAPPER_SIZE,
    borderRadius: ICON_WRAPPER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.med,
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    tintColor: colors.min,
  },
  label: {
    flex: 1,
    marginLeft: 20,
    fontSize: 35,
    color: colors.min,
  },
});

export default styles;
