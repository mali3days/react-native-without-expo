import React from 'react';
import {View,Text,Image,Button,StyleSheet,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = ({place,onItemDelete}) => {
    return (
            <View style={styles.сontainer}>
                <View>
                    <Image source={place.image} style={styles.placeImage}/>
                    <Text style={styles.placeName}>{place.name}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={onItemDelete}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name='ios-trash' color='red'/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
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

export default placeDetail;