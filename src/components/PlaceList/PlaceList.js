import React from 'react';
import {FlatList,StyleSheet} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = ({places,onItemSelected}) => {
    return (
        <FlatList
            data={places}
            style={styles.listContainer}
            renderItem={({item}) => {
                return (<ListItem
                    item={item}
                    onItemPressed={() => onItemSelected(item.key)}
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
