import React from 'react';
import {FlatList,StyleSheet} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = ({places,onItemDeleted}) => {
    return (
        <FlatList
            data={places}
            style={styles.listContainer}
            renderItem={({item}) => {
                return (<ListItem
                    item={item}
                    onItemPressed={() => onItemDeleted(item.key)}
                />);
            }}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
    },
});

export default placeList;
