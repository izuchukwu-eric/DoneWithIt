import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

 function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
            </View>
        
            <Image source={require('../assets/chair.jpg')} style={styles.image} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    closeIcon: {
        position: "absolute",
        top: 50,
        left: 30,
    },
    deleteIcon: {
        position: "absolute",
        top: 50,
        right: 30,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%",
    }

})

export default ViewImageScreen
