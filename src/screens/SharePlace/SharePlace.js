import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends PureComponent {
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

    placeAddedHandler = (placeName) => {
        this.props.onAddPlace(placeName);
    }

    render() {
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
