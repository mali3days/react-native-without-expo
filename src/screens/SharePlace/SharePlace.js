import React, { PureComponent } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import MaintText from '../../components/UI/@MainText/MainText';
import HeadingText from '../../components/UI/@HeadingText/HeadingText';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

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
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MaintText><HeadingText>Share a Place with us!</HeadingText></MaintText>
                    <PickImage/>
                    <PickLocation/>
                    <PlaceInput />
                    <View style={styles.button}><Button title="Share the Place!" /></View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150,
    },
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
