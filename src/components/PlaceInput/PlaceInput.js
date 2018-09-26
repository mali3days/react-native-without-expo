import React, { PureComponent } from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';

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

    onPlaceAdded = () => {
        const {placeName} = this.state;

        if (placeName.trim() === '') return;

        this.setState(initialState);
        this.props.onPlaceAdded(placeName);
    }

    render() {
        const {placeName} = this.state;

        return (
            <View style={styles.inputContainer}>
                <TextInput
                    value={placeName}
                    style={styles.placeInput}
                    placeholder='An awesome place'
                    onChangeText={this.placeNameOnChange}
                />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.onPlaceAdded}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    inputContainer: {
      // flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    placeInput: {
      width: '70%',
    },
    placeButton: {
      width: '30%',
    },
});

export default PlaceInput;
