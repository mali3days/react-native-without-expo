import React, {Component} from 'react';
import {View,Text,Image,Button,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.place.key);
        this.props.navigator.pop();
    }

    render() {
        const {place} = this.props;

        return (
            <View style={styles.сontainer}>
                <View>
                    <Image source={place.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{place.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name='ios-trash' color='red'/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    сontainer: {
        margin: 22,
    },
    placeImage: {
        width: '100%',
        height: 200,
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
        margin: 10,
    },
    deleteButton: {
        alignItems: 'center',
    }
});

const mapDispatchToProp = dispatch => {
    return {
        onDeletePlace: key => dispatch(deletePlace(key)),
    };
};

export default connect(null, mapDispatchToProp)(PlaceDetail);