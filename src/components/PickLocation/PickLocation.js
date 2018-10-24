import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import imagePlaceholder from '../../images/backgroundImage.png';

class PickLocation extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}><Text>Map</Text></View>
                <View style={styles.button}><Button title="Locate Me" onPress={() => alert('Locate ME!')}/></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        margin: 8,
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150,
    },
});

export default PickLocation;
