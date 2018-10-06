import React from 'react';
import {Modal,View,Text,Image,Button,StyleSheet,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = ({place,onItemDelete,onModalClose}) => {
    getModalContent = (place) => {
        if (place === null) return;
        return (
            <View>
                <Image source={place.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{place.name}</Text>
            </View>
        );
    };

    return (
        <Modal visible={place !== null} animationType='slide' onRequestClose={onModalClose}>
            <View style={styles.modalContainer}>
                {this.getModalContent(place)}
                <View>
                    <TouchableOpacity onPress={onItemDelete}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name='ios-trash' color='red'/>
                        </View>
                    </TouchableOpacity>
                    <Button title='Close' onPress={onModalClose}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
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