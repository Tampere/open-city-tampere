import * as React from 'react';
import {
  View,
  FlatList,
  Text,
  UIManager,
  LayoutAnimation,
  ActivityIndicator,
} from 'react-native';
import Config from 'src/config/config.json';
import { makeRequest } from 'src/utils/requests';
import { getResources, getPurposes } from 'src/modules/Varaamo/utils/respa';
import Picker from 'src/components/Picker';
import { Calendar } from 'react-native-calendars';
import DatePicker from 'src/modules/Varaamo/components/DatePicker';
import ResourceListItem from '../../components/ResourceListItem';
import styles from './styles';
import Moment from 'moment';
/*
 View for listing Varaamo reservations
 */
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


class VaraamoListView extends React.Component {

  constructor(props) {
    super(props);
    const date = Moment(new Date())
    this.state = {
      loading: true,
      loadingMore: false,
      resources: [],
      people: 1,
      selectedDate: {
        dateString: date.format('DD.MM.YYYY'),
        moment: date,
      },
      showCalendar: false,
      purposes: [],
    };
  }

  _keyExtractor = (item, index) => item.id;

  componentWillMount = async () => {
    const url = Config.RESPA_BASE_URL + 'resource/'
    const resources = await getResources(url);
    const purposes = await getPurposes();
    const pickerData = this.parsePurposesToPickerData(purposes)
    this.setState({
      loading: false,
      resources,
      purposes: pickerData,
    })
  }

  onDataChange = async (data) => {
    console.warn(data)
    const getParams = `purpose=${data.key}`

    this.setState({
      loading: true,
      resources: [],
      selectedPurpose: data,
      getParams: {
        ...this.state.getParams,
        purpose: getParams,
      }
    });
    this.getResourcesWithParams({
      ...this.state.getParams,
      purpose: getParams,
    })
  }

  getResourcesWithParams = async (params) => {
    let resourceParams = '?';
    if (params.purpose) {
      if (resourceParams.length > 1) {
        resourceParams = resourceParams + '&';
      }
      resourceParams = resourceParams + params.purpose;
    }

    if (params.date) {
      if (resourceParams.length > 1) {
        resourceParams = resourceParams + '&';
      }

      resourceParams = resourceParams + params.date
    }

    if (params.people) {
      if (resourceParams.length > 1) {
        resourceParams = resourceParams + '&';
      }

      resourceParams = resourceParams + params.people
    }

    const url = Config.RESPA_BASE_URL + 'resource/' + resourceParams
    const resources = await getResources(url);
    this.setState({
      loading: false,
      resources,
      getParams: params,
    })
  }

  onDateSelectPress = () => {
    // console.warn(this.state.showCalendar)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ showCalendar: true })
  }

  onDayPress = async (day) => {
    const selected = {};
    selected[day.dateString] = { selected: true };
    const mDay = day;
    mDay.moment = Moment(new Date(day.timestamp))
    const getParams = `start=${day.dateString}&end=${day.dateString}`


    this.setState({
      resources: [],
      selected,
      selectedDate: mDay,
      showCalendar: false,
      loading: true,
      getParams: {
        ...this.state.getParams,
        date: getParams,
      }
    });
    this.getResourcesWithParams({
      ...this.state.getParams,
      date: getParams,
    })
  }

  parsePurposesToPickerData = (purposes) => {
    const pickerData = [];
    for (let i = 0; i < purposes.results.length; i++) {
      pickerData.push({
        key: purposes.results[i].id,
        label: purposes.results[i].name.fi
      });
    }
    return pickerData;
  }




  goToDetail = (item) => {
    this.props.navigation.navigate('ResourceDetail', {
      item,
      date: this.state.selectedDate
    })
  }

  loadMore = async () => {
    const resources = this.state.resources;
    if (resources.next) {
      this.setState({ loadingMore: true })
      const url = resources.next;
      const nextPage = await getResources(url);
      const mResults = resources.results.concat(nextPage.results);
      nextPage.results = mResults;

      this.setState({
        resources: nextPage,
        loadingMore: false
      });
    }
  }

  onPeopleChange = (data) => {
    const getParams = `people=${data.key}`
    this.setState({
      people: data.label,
      loading: true,
      resources: [],
      getParams: {
        ...this.state.getParams,
        people: getParams,
      }
    });

    this.getResourcesWithParams({
      ...this.state.getParams,
      people: getParams,
    })
  }

  renderFooter = () => {
    if (this.state.loadingMore && !this.state.loading) {
      return (
        <View style={{ marginVertical: 16}}>
          <ActivityIndicator
            size={'small'}
          />
        </View>
      )
    }
    if (this.state.resources.results && this.state.resources.results.length === 0) {
      return (
        <View style={{ marginVertical: 16}}>
          <Text style={{textAlign: 'center'}}>Antamillasi hakuehdoilla ei löydy kohteita.</Text>
        </View>
      )
    }

    return (
      <View style={{ marginVertical: 16}} />
    )
  }

  renderItem = (resource) => {
    // console.warn(resource.item.unit)
    // const unit = await this.getUnit(resource.item.unit)
    // console.warn("unit2")
    // console.warn(unit)
    return(
      <ResourceListItem
        onPress={() => this.goToDetail(resource.item)}
        item={resource.item}
      />
    )
  }

  renderHeader = () => {
    return(
      <View>
        <Picker
          label={('Mitä haluat tehdä?').toUpperCase()}
          placeholder={'Valitse'}
          value={this.state.selectedPurpose && this.state.selectedPurpose.label}
          data={this.state.purposes}
          onChangeSelection={this.onDataChange}
        />
        <Picker
          label={('Montako henkeä?').toUpperCase()}
          placeholder={'1'}
          value={this.state.people}
          onChangeSelection={(data) => this.onPeopleChange(data)}
          data={
            [
              { key: '1', label: '1'},
              { key: '2', label: '2'},
              { key: '3', label: '3'},
              { key: '4', label: '4'},
              { key: '5', label: '5'},
              { key: '6', label: '6'},
              { key: '7', label: '7'},
              { key: '8', label: '8'},
              { key: '9', label: '9'},
              { key: '10', label: '10'},
              { key: '15', label: '15'},
              { key: '20', label: '20'},
              { key: '25', label: '25'},
              { key: '30', label: '30+'},
            ]
          }
        />
        <View>
          <DatePicker
            label={('Milloin?').toUpperCase()}
            placeholder={'typePlaceholder'}
            onPress={() => this.onDateSelectPress()}
            value={this.state.selectedDate.moment.format('DD.MM.YYYY')}
          />
          { this.state.showCalendar &&
            <View>
              <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                firstDay={1}
                hideExtraDays
                markedDates={this.state.selected}
              />
            </View>
          }
        </View>
        { this.state.loading &&
          <View style={styles.loading}>
            <ActivityIndicator
              size={'large'}
            />
          </View>
        }
      </View>
    )
  }

  render() {
    const { Header } = this.props.screenProps;

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.container}>

          <FlatList
            onEndReached={() => this.loadMore()}
            data={this.state.resources.results}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            ListHeaderComponent={() => this.renderHeader()}
            ListFooterComponent={() => this.renderFooter()}
          />
        </View>
      </View>
    )
  }
}

export default VaraamoListView;
