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
    flexGrow: 1,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bodyText: {
    color: '$colors.min',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  buttonRowContainer: {
    flexDirection: 'row',
    flexGrow: 1,

  },
  timePicker: {
    paddingHorizontal: 32,
    paddingTop: 8,
    paddingBottom: 8,
    textAlignVertical: 'top',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%'
  },
  inputLabel: {
    color: '$colors.min',
    marginBottom: 8,
    alignSelf: 'flex-start'
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
    marginRight: 16,
    marginVertical: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
});

export default styles;
