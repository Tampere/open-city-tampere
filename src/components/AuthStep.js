/* @flow */
import * as React from 'react';
import {
  View,
  Text,
  Button,
  Picker,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { type Profile } from 'src/types';
import { doAuth } from 'src/utils/auth';
import { updateProfile, isAuthed } from 'src/profile';
import colors from 'src/config/colors';
import { translate } from 'react-i18next';

let styles;

type Props = {
  // Provided by create(Single|Multi)ChoiceStep
  next: () => null,
  profile: Object,
};

class AuthStep extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      isAuthorized: false,
      error: null,
      loading: false,
    };
  }

  componentWillMount = async () => {
    this.setState({ isAuthorized: await isAuthed() })
  }

  authorize = async () => {
    const { next, profile } = this.props;
    try {
      this.setState({ loading: true });
      console.warn(profile)
      const authorization = await doAuth();
      console.warn(authorization)
      const myProfile = { ...profile, auth: authorization.auth };
      this.setState({ loading: false });
      this.props.next(myProfile);
    } catch (error) {
      this.setState({ error: true, loading: false })
      console.error(error);
    }
  }

  render() {
    const { t } = this.props;

    console.warn(Object.keys(this.props))
    if (!this.state.isAuthorized) {
      return(
        <View style={styles.container}>
          <Text style={styles.body}>{t('loginDescription')}</Text>
          <Text style={styles.body}>{t('noLoginDescription')}</Text>
          { this.state.error &&
            <Text style={styles.error}>{t('loginFail')}</Text>
          }
          <View style={styles.buttonContainer} >
            <TouchableOpacity
              disabled={this.state.loading}
              style={styles.button}
              onPress={() => this.authorize()}
            >
              <View>
                { !this.state.loading &&
                  <Text style={styles.buttonText}>{t('signIn')}</Text>
                }
                { this.state.loading &&
                  <ActivityIndicator style={styles.loading} size="small" />
                }
              </View>
            </TouchableOpacity>
          </View>

        </View>
      )
    } else if (this.state.isAuthorized) {
      return (
        <View style={styles.container}>
          <Text style={styles.body}>{t('alreadyLoggedIn')}</Text>
        </View>
      );
    }
  }
};

styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.max,
  },
  body: {
    width: '100%',
    color: colors.min,
    fontSize: 20,
    marginVertical: 16,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    paddingHorizontal: 24,
    backgroundColor: colors.med,
    paddingVertical: 8,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.min,
    fontSize: 18,
  },
  changeLanguage: {
    alignSelf: 'stretch',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    width: '100%'
  },
});

export default translate(['authStep'])(AuthStep);
