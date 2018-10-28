import React, { PureComponent } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Input from '../UI/@Input/Input';

class PlaceInput extends PureComponent {
    render() {
        return (
            <Input
                placeholder="Place Name"
                {...this.props}
            />
        );
    };
}

export default PlaceInput;
