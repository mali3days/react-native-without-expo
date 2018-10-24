import React, { PureComponent } from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';
import Input from '../UI/@Input/Input';

const initialState = {
    placeName: '',
};

class PlaceInput extends PureComponent {
    state = initialState;

    placeNameOnChange = value => {
        this.setState({
            placeName: value,
        });
    }

    render() {
        const {placeName} = this.state;

        return (
            <Input
                value={placeName}
                placeholder="Place Name"
                onChangeText={this.placeNameOnChange}
            />
        );
    };
}

export default PlaceInput;
