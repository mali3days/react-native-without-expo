import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends PureComponent {
    render() {
        const { places } = this.props;

        return(
            <View>
                <PlaceList places={places}/>
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
