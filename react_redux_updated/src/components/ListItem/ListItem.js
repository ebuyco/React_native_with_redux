import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image
        resizeMode="cover"
        source={props.placeImage}
        style={styles.placeImage}
      />
      <Text style={styles.placeText}>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = EStylesheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000000',
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30,
  },
  placeText: {
    fontWeight: 'bold',
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    color: '#000000',
  },
});

export default listItem;
