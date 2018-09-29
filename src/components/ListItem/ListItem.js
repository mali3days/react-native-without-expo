import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const ListItem = ({item,onItemPressed}) => (
    <TouchableOpacity onPress={onItemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode='cover' source={item.image} style={styles.placeImage} />
            <Text>{item.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30,
    }
});

export default ListItem;
