import * as React from 'react';
import {
  View,
  FlatList,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import Config from 'src/config/config.json';
import styles from './styles';
import Moment from 'moment';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getResource } from 'src/modules/Varaamo/utils/respa';
import colors from 'src/config/colors';
import TimeChooser from 'src/modules/Varaamo/components/TimeChooser';
import { isAuthed, updateProfile } from 'src/profile';
import { doAuth } from 'src/utils/auth';

/*
 View for listing Varaamo reservations
 */
class ResourceDetailView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      item: this.props.navigation.state.params.item,
      openingHours: this.props.navigation.state.params.item.opening_hours[0],
      selected: null,
      markedDates: null,
    };
  }

  componentWillMount = async () => {
    const authed = await isAuthed();

    const itemId = this.props.navigation.state.params.item.id;
    const startDate = Moment(new Date()).format('YYYY-MM-DD');
    const endDate = Moment(new Date()).add(60, 'days').format('YYYY-MM-DD');
    const getParams = `?start=${startDate}&end=${endDate}`
    const item = await getResource(itemId, getParams);
    const markedDates = this.getMarkedDates(item)
    this.setState({
      authed,
      item,
      markedDates,
      visibleMarkedDates: markedDates,
    });
  }

  getResourceDetails = async () => {

  }

  getMarkedDates = (item) => {
    const openingHours = item.opening_hours;
    let markedDates = {};
    for (let i = 0; i < openingHours.length; i++) {
      mDate = openingHours[i];
      markedDates[mDate.date] = { marked: true, dotColor: mDate.opens ? 'green' : 'red' }
    }

    return markedDates;
  }

  authorize = async () => {
    try {
      this.setState({ loading: true });
      const authorization = await doAuth();
      await updateProfile({ auth: authorization })
      this.setState({ loading: false, authed: true });
    } catch (error) {
      this.setState({ error: true, loading: false })
      console.error(error);
    }
  }

  formatPrice = (minPrice, maxPrice) => {
    if (minPrice === maxPrice && (minPrice !== null && maxPrice !== null)) {
      return (minPrice + ' €/h');
    } else if (minPrice && maxPrice && minPrice !== 'null' && maxPrice !== 'null') {
      return (minPrice + ' - ' + maxPrice + ' €/h');
    } else {
      return 'Maksuton'
    }
  }

  formatReservationPeriod = (item) => {
    const maxPeriod = item.max_period;
    const mom = Moment(maxPeriod, 'HH:mm:ss');

    const hours = mom.hour();
    const minutes = mom.minutes();
    let timeString = '';
    if (hours > 0) {
      timeString = 'Varauksen maksimipituus: ' + hours + ' tuntia '
    }

    if (minutes > 0) {
      if (timeString.length === 0) timeString = 'Varauksen maksimipituus: ';
      timeString = timeString + minutes + ' minuuttia '
    }
    return timeString;
  }



  onDayPress = (day) => {
    const selectedDate = Moment(new Date(day.timestamp));
    const openingHours = this.state.item.opening_hours;
    let selectedOpeningHours = this.state.item.opening_hours[0];
    const markedDates = JSON.parse(JSON.stringify(this.state.markedDates))

    for (let i = 0; i < openingHours.length; i++) {
      const mDate = Moment(new Date(openingHours[i].date));
      if (selectedDate.isSame(mDate, 'day')) {
        selectedOpeningHours = openingHours[i];
      }
    }

    const selected = { [day.dateString]: {selected: true, disableTouchEvent: true}};
    const visibleMarkedDates = Object.assign(markedDates, selected);

    this.setState({
      openingHours: selectedOpeningHours,
      visibleMarkedDates: visibleMarkedDates
    });
  }

  onMonthChanged = async (month) => {
    const itemId = this.props.navigation.state.params.item.id;
    const startDate = Moment(new Date()).format('YYYY-MM-DD');
    const endDate = Moment(new Date(month.dateString)).add(60, 'days').format('YYYY-MM-DD');
    const getParams = `?start=${startDate}&end=${endDate}`
    const item = await getResource(itemId, getParams);
    const markedDates = this.getMarkedDates(item)
    this.setState({
      item,
      markedDates,
      visibleMarkedDates: markedDates,
    });
  }

  render() {
    const { item } = this.state;
    const imageUrl = item.images.length > 0 && item.images[0].url;

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text
              style={styles.itemName}
              numberOfLines={1}
            >
              {item.name.fi}
            </Text>
            <Text style={styles.itemLocation}>{item.unit.name && item.unit.name.fi}</Text>
            <Text style={styles.itemLocation}>{item.unit.street_address && item.unit.street_address.fi}</Text>
          </View>
          <View style={styles.thumbnailContainer}>

            <Image
              style={{width: '100%', height: '100%'}}
              source={{ uri: imageUrl }}
            />
            <View style={styles.thumbnailCapacity}>
              <Icon name="people" size={16} color={colors.min} />
              <Text style={styles.capacityText}>{item.people_capacity}</Text>
            </View>
            <View style={styles.thumbnailDescriptionContainer}>
              <Text style={styles.thumbnailDescription}>{this.formatPrice(item.min_price_per_hour, item.max_price_per_hour)}</Text>
            </View>
            <View style={styles.thumbnailTypeContainer}>
              <Text style={styles.thumbnailType}>{item.type && item.type.name && item.type.name.fi}</Text>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.description}>{item.description && item.description.fi}</Text>
            <Text style={styles.maxPeriod}>{ this.formatReservationPeriod(item)}</Text>
            { !this.state.authed &&
              <TouchableOpacity
                onPress={() => this.authorize()}
              >
                <Text style={styles.maxPeriod}>Sinun on kirjauduttava sisään tehdäksesi varauksia.</Text>
              </TouchableOpacity>
            }
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              firstDay={1}
              hideExtraDays
              markedDates={this.state.visibleMarkedDates}
              onMonthChange={(month) => this.onMonthChanged(month)}
              />
            <TimeChooser
              openingHours={this.state.openingHours}
              interval={this.state.item.min_period}
            />
          </View>
        </View>
      </ScrollView>
    );

    // return (
    //     <View style={styles.container}>
    //       <View style={styles.thumbnailContainer}>
    //         <Image
    //           style={{width: '100%', height: '100%'}}
    //           source={{ uri: 'https://respa.tampere.fi/resource_image/57' }}
    //         />
    //         <Text style={styles.thumbnailDescription}>{formatPrice(props.item.min_price_per_hour, props.item.max_price_per_hour)}</Text>
    //       </View>
    //       <View style={styles.descriptionContainer}>
    //         <Text
    //           style={styles.itemName}
    //           numberOfLines={1}
    //         >
    //           {props.item.name.fi}
    //         </Text>
    //         <Text style={styles.itemLocation}>{props.item.unit.name && props.item.unit.name.fi}</Text>
    //         <View style={styles.itemFooter}>
    //           <Text style={styles.availabilityText}>{ props.item.reservable ? 'Vapaana' : 'Varattu'}</Text>
    //           <Text style={styles.typeText}>{props.item.type.name.fi}</Text>
    //         </View>
    //       </View>
    //     </View>
    // )
  }
}

export default ResourceDetailView;
