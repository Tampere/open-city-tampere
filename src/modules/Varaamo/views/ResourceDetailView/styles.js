import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnailContainer: {
    height: 240,
    width: '100%',
  },
  titleContainer: {
    backgroundColor: '$colors.max',
    padding: 16,
  },
  itemLocation: {
    color: '$colors.min',
    fontSize: 16,
    marginVertical: 4,
  },
  itemName: {
    color: '$colors.min',
    fontSize: 20,
    marginVertical: 4,
  },
  thumbnailDescription: {
    fontSize: 20,
    color: '$colors.min',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  thumbnailDescriptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 4,
    backgroundColor: '$colors.med'
  },
  bodyContainer: {
    padding: 16,
  },
  description: {
    fontSize: 18,
  }
});

export default styles;
