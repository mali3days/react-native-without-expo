import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (
            event.type === 'NavBarButtonPress' &&
            event.id === 'SideDrawerToggle'
        ) {
            this.props.navigator.toggleDrawer({
                side: 'left',
            });
        }
    }
    
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
