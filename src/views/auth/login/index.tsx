import React from "react";
import Splash from "@src/assets/splash.png";
import { ImageBackground, View } from "react-native";
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