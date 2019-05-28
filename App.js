import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/test.jpg'
export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
     this.setState(prevState => {
      return{
        places: prevState.places.concat({
          key: Math.random(), 
          value: placeName,
          image: placeImage
          // image uri for declaration an image from online 
          // image: {
          //   uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          // }
        })
      };
    });
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
              return place.key !== prevState.selectedPlace.key;
          }),
          selectedPlace: null
        };
    });
  };

  modalClosedHandler = () => {
      this.setState({
        selectedPlace: null
      });
  }

  placeSelectedHandler = key => {
    // this.setState(prevState => {
    //   return{
    //     places: prevState.places.filter(place => {
    //         return place.key !== key;

    //     })
    //   }
    // })

   this.setState(prevState => {
     return {
       selectedPlace: prevState.places.find(place => {
          return place.key === key;
       })
     }
   })   

  }

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
       onItemSelected= {this.placeSelectedHandler}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    color: "#000000",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
