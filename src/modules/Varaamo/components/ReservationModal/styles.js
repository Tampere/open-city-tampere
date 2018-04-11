import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';


const styles = EStyleSheet.create({
  $modalBackground: () => Color(EStyleSheet.value('$colors.med')).alpha(0.97),
  $buttonBackground: () => Color(EStyleSheet.value('$colors.med')).darken(0.3),
  row: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '$modalBackground',
    marginVertical: 64,
    marginHorizontal: 32,
    borderRadius: 15,
    padding: 16,
  },
  label: {
    marginBottom: 4,
  },
  labelText: {
    fontSize: 20,
  },
  input: {
    paddingHorizontal: 16,
    backgroundColor: '$colors.min',
    paddingTop: 4,
    paddingBottom: 4,
    textAlignVertical: 'center',
  },
  timeInputContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bodyText: {
    color: '$colors.min',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  timePicker: {
    paddingHorizontal: 16,
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    textAlignVertical: 'top',
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white'
  },
  inputLabel: {
    color: '$colors.min',
    marginBottom: 4,
  },
  inputContainer: {
    marginTop: 8,
  },
  inputIcon: {
    position: 'absolute',
    right: 8,
    height: '100%',
    top: '35%',
  },
  buttonContainer: {
    backgroundColor: '$buttonBackground',
    marginHorizontal: 16,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
});

export default styles;
