import * as React from 'react';
import {
  View,
  FlatList,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Config from 'src/config/config.json';
import styles from './styles';
/*
 View for listing Varaamo reservations
 */
class ResourceDetailView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount = () => {

  }

  formatPrice = (minPrice, maxPrice) => {
    if (minPrice === maxPrice && (minPrice !== null && maxPrice !== null)) {
      return (minPrice + ' €/h');
    } else if (minPrice && maxPrice && minPrice !== 'null' && maxPrice !== 'null') {
      console.warn(minPrice)
      return (minPrice + ' - ' + maxPrice + ' €/h');
    } else {
      return '0,00 €/h'
    }
  }

  render() {
    const { item } = this.props.navigation.state.params;
    const imageUrl = item.images.length > 0 && item.images[0].url;

    console.warn(item.name)
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
            <View style={styles.thumbnailDescriptionContainer}>
              <Text style={styles.thumbnailDescription}>{this.formatPrice(item.min_price_per_hour, item.max_price_per_hour)}</Text>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={styles.description}>{item.description.fi}</Text>
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
