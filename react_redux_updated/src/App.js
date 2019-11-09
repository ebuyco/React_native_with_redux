import React, {Component} from 'react';
import {View} from 'react-native';

import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';
import placeImage from './assets/data-image.jpg';
import EStylesheet from 'react-native-extended-stylesheet';
import {connect} from 'react-redux';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
} from '../src/store/actions/index';
class App extends Component {
  // state = {
  //   places: [],
  //   selectedPlace: null,
  // };

  // placeAddedHandler = placeName => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.concat({
  //         key: Math.random().toString(),
  //         name: placeName,
  //         image: placeImage,
  //       }),
  //     };
  //   });
  // };

  // placeDeletedHandler = () => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== prevState.selectedPlace.key;
  //       }),
  //       selectedPlace: null,
  //     };
  //   });
  // };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  // modalClosedHandler = () => {
  //   this.setState({
  //     selectedPlace: null,
  //   });
  // };

  // placeSelectedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       selectedPlace: prevState.places.find(place => {
  //         return place.key === key;
  //       }),
  //     };
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = EStylesheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
