import EStyleSheet from 'react-native-extended-stylesheet';

const containerHeight = 280;
const styles = EStyleSheet.create({
  thumbnailContainer: {
    flex: 3,
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
    backgroundColor: '$colors.med',
  },
  thumbnailCapacity: {
    backgroundColor: '$colors.med',
    borderRadius: 24,
    height: 48,
    width: 48,
    position: 'absolute',
    top: 4,
    right: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    backgroundColor: '$colors.max',
    flex: 2,
    borderTopWidth: 1,
    padding: 8,
  },
  itemFooter: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  container: {
    height: containerHeight,
    borderWidth: 1,
    marginVertical: 8,
  },
  typeText: {
    flex: 1,
    fontSize: 16,
    color: '$colors.min',
    textAlign: 'right',
  },
  availabilityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$colors.min',
    textAlign: 'left'
  },
  itemName: {
    fontSize: 20,
    color: '$colors.min',
  },
  itemLocation: {
    fontSize: 16,
    color: '$colors.min',
  },
  available: {
    backgroundColor: '#78A537'
  },
  disabled: {
    backgroundColor: '#CE4640',
  },
  availabilityContainer: {
    borderRadius: 16,
    padding: 8,
    paddingHorizontal: 12,
  },
  capacityText: {
    color: '$colors.min',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;
