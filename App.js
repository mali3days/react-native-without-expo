/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null,
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri: 'https://www.telegraph.co.uk/content/dam/Travel/leadAssets/24/49/sharm-thomson2_2449064a.jpg?imwidth=450',
          },
        }),
      };
    });
  }

  onItemSelectedHandler = itemKey => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => place.key === itemKey),
      };
    });
  }

  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
        selectedPlace: null,
      };
    });
  }

  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null,
    });
  }
 
  render() {
    const {places,selectedPlace} = this.state;

    return (
      <View style={styles.container}>
        <PlaceDetail
          place={selectedPlace}
          onItemDelete={this.placeDeleteHandler}
          onModalClose={this.modalCloseHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={places} onItemSelected={this.onItemSelectedHandler}/>
      </View>
    );
  }
}

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
