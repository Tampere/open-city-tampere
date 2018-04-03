import * as React from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import Config from 'src/config/config.json';
import { makeRequest } from 'src/utils/requests';
import { getUnit, getResources } from 'src/modules/Varaamo/utils/respa';
import Picker from 'src/components/Picker';
import DatePicker from 'src/modules/Varaamo/components/DatePicker';
import ResourceListItem from '../../components/ResourceListItem';
import styles from './styles';
/*
 View for listing Varaamo reservations
 */
class VaraamoListView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resources: [],
    };
  }

  _keyExtractor = (item, index) => item.id;

  componentWillMount = async () => {
    const url = Config.RESPA_BASE_URL + 'resource/'
    const resources = await getResources(url);
    this.setState({ resources })
  }

  loadMore = () => {

  }

  onDataChange = (data) => {
    console.warn(data)
  }

  renderHeader = () => {
    return(
      <View>
        <Picker
          label={('Mitä haluat tehdä?').toUpperCase()}
          placeholder={'Valitse'}
          value={''}
          data={[
          { key: 1, section: true, label: 'Vaihtoehdot' },
          { key: 2, label: 'Valinta 1' },
          { key: 3, label: 'Valinta 2' },]}
          onChangeSelection={this.onDataChange}
        />
        <DatePicker
          label={('Milloin?').toUpperCase()}
          placeholder={'typePlaceholder'}
          value={'1.4.2018'}
        />
        <DatePicker
          label={('Montako henkeä?').toUpperCase()}
          placeholder={'typePlaceholder'}
          value={'1'}
        />
      </View>
    )
  }

  goToDetail = (item) => {
    this.props.navigation.navigate('ResourceDetail', { item })
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

  render() {
    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.resources.results}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}

export default VaraamoListView;
