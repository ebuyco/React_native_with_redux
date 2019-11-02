import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';
import EStylesheet from 'react-native-extended-stylesheet';;

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = EStylesheet.create({
  listContainer: {
    width: '100%',
    color: '#000000',
  },
});
export default PlaceList;
