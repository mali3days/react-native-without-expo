import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends PureComponent {
    
    itemSelectedHandler = key => {
        const selectedPlace = this.props.places.find(place => place.key === key);

        this.props.navigator.push({
            screen: 'PlaceDetailsScreen',
            title: selectedPlace.name,
            passProps: {
                place: selectedPlace,
            }
        });
    }

    render() {
        const { places } = this.props;

        return(
            <View>
                <PlaceList
                    places={places}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        places: state.places.places,
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);
