import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text } from 'react-native';
import Button from "../components/Button";

 function WelcomeScreen() {
    return (
            <ImageBackground
                blurRadius={5} 
                style={styles.background}
                source={require('../assets/background.jpg')} 
            >
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} 
                />
                <Text style={styles.text}>Sell What You Don't Need</Text>
                <View style={styles.buttonsContainer}>
                    <Button title="Login" />
                    <Button title="Register" color="secondary" />
                </View>
           </ImageBackground>
            
            
           
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70,  
    },
    text: {
        color: "#000",
        position: "absolute",
        top: 170,
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})


export default WelcomeScreen

