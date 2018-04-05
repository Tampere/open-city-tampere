import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';

const styles = EStyleSheet.create({
  $semiTransparentMed: () => Color(EStyleSheet.value('$colors.med')).alpha(0.7),
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
    fontSize: 24,
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
    backgroundColor: '$semiTransparentMed'
  },
  thumbnailTypeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 4,
    backgroundColor: '$semiTransparentMed'
  },
  thumbnailType: {
    fontSize: 20,
    color: '$colors.min',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bodyContainer: {
    padding: 16,
  },
  description: {
    fontSize: 20,
  },
  maxPeriod: {
    fontSize: 20,
    marginVertical: 16,
    fontWeight: 'bold',
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  thumbnailCapacity: {
    backgroundColor: '$semiTransparentMed',
    borderRadius: 24,
    height: 48,
    width: 48,
    position: 'absolute',
    bottom: 4,
    right: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  capacityText: {
    color: '$colors.min',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
