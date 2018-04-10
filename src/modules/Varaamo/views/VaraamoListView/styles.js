import EStyleSheet from 'react-native-extended-stylesheet';

const containerHeight = 300;
const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  calendar: {
    marginVertical: 16,
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  loading: {
    marginVertical: 32,
  }
});

export default styles;
