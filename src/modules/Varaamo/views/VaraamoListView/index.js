import * as React from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import Config from 'src/config/config.json';
import { makeRequest } from 'src/utils/requests';
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

  componentWillMount = () => {
    const url = Config.RESPA_BASE_URL + 'resource/'
    this.getResources(url);
  }

  getUnit = async (unitId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const url = Config.RESPA_BASE_URL + 'unit/' + unitId;
        const unit = await makeRequest(url, 'GET', null, null, null);
        resolve(unit);
      } catch (error) {
        reject(error)
      }
    })
  }

  getResources = async (url) => {

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    console.warn(url)
    const resources = await makeRequest(url, 'GET', headers, null, null);
    console.warn(resources)
    console.warn(Object.keys(resources.results))

    for (let i = 0; i < resources.results.length; i++) {
      const unit = await this.getUnit(resources.results[i].unit);
      resources.results[i].unit = unit;
    }

    this.setState({ resources: resources.results });

  }

  loadMore = () => {

  }

  renderItem = (resource) => {
    // console.warn(resource.item.unit)
    // const unit = await this.getUnit(resource.item.unit)
    // console.warn("unit2")
    // console.warn(unit)
    return(
      <ResourceListItem
        item={resource.item}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.resources}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default VaraamoListView;
