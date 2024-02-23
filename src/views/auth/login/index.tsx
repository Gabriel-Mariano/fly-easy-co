import React from "react";
import Splash from "@src/assets/splash.png";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles/styles";
import { Button } from "@src/components/Button";

function LoginScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={Splash} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.footer}>
                    <Button title="Entrar" icon="logo-google" />
                </View>
            </ImageBackground>
        </View>
    )
}

export { LoginScreen }