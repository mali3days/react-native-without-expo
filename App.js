/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

type Props = {};
class App extends Component<Props> {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  onItemSelectedHandler = itemKey => {
    this.props.onSelectPlace(itemKey);
  }

  placeDeleteHandler = () => {
    this.props.onDeletePlace();
  }

  modalCloseHandler = () => {
    this.props.onDeselectPlace();
  }
 
  render() {
    const {places,selectedPlace} = this.props;

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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
}

const mapDisppatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
}

export default connect(mapStateToProps, mapDisppatchToProps)(App); 
