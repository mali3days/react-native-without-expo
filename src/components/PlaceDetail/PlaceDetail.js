import React from 'react';
import {Modal,View,Text,Image,Button,StyleSheet} from 'react-native'

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
                    <Button title='Delete' color='red' onPress={onItemDelete}/>
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
    }
});

export default placeDetail;