import React from "react";
import { ImageBackground, View, Text } from "react-native";
import Splash from "../../../assets/splash.png";
import { styles } from "./styles/styles";

function LoginScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={Splash} resizeMode="cover" style={styles.imageBackground}>
                
            </ImageBackground>
        </View>
    )
}

export { LoginScreen }