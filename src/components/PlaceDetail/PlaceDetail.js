import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';


const placeDetail = props => {
    let modalContent = null;

    if(props.selectedPlace){
        modalContent= (
            <View>
             <Image
            source={props.selectedPlace.image}
            style={styles.placeImage}
            />
            <Text
            style= {styles.placeName}
            >
             {props.selectedPlace.name}    
            </Text>
            </View>
         
        );
    }
    return(
        <Modal 
        onRequestClose={props.onModalClosed}
        visible={props.selectedPlace !== null }
        animationType="slide"
        >
        <View style={styles.modalContainer}>
            {modalContent}
            <View>
                <Button 
                onPress={props.onItemDeleted}
                color= "red"
                title="Delete"/>
                <Button 
                onPress={props.onModalClosed}
                color="blue"
                title="Close"
                />
            </View>
        </View>
    </Modal>
   );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        color: "#000000"
    }
})
  
export default placeDetail;