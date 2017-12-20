import EStyleSheet from 'react-native-extended-stylesheet';
import colors from 'src/config/colors';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: colors.med,
    fontSize: 25,
  },
  date: {
    color: colors.max,
    fontSize: 16,
    marginBottom: 20,
  },
  description: {
    color: colors.max,
    fontSize: 16,
    marginBottom: 20,
  },
  link: {
    color: colors.med,
    fontSize: 20,
  },
});

export default styles;
