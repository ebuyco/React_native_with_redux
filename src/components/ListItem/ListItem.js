import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity
    onPress={props.onItemPressed}
    >
        <View style={styles.listItem}>
            <Image
            resizeMode="cover"
            source={props.placeImage}
            style={styles.placeImage}
            />
        <Text
        style={styles.placeText}
        >{props.placeName}</Text>
    </View>
    </TouchableOpacity>
    
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    },
    placeText: {
       fontWeight: "bold",
       color: "#000"     
    }
});

export default listItem;