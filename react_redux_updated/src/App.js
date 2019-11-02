import React, {Component} from 'react';
import {View} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import placeImage from './assets/data-image.jpg';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  componentDidMount = () => {};

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          image: placeImage,
        }),
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        }),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          onItemDeleted={this.placeDeletedHandler}
          selectedPlace={this.state.selectedPlace}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlacedAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = EStylesheet.create({
  container: {
    padding: 50,
  },
});
