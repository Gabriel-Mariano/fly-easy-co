import React, { useState } from "react";
import Splash from "@src/assets/splash.png";
import Icon from "react-native-vector-icons/Ionicons";
import { ImageBackground, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles/styles";
import { Button } from "@src/components/Button";
import { Input } from "@src/components/Input";

function LoginScreen() {
    const [text, setText] = useState("");

    const handlePressOutside = () => {
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePressOutside}>
            <ImageBackground source={Splash} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.footer}>
                    <Input 
                        label="Username"
                        placeholder="Digite algo..." 
                        value={text} 
                        onChangeText={(e)=> setText(e)}
                        contentLeft={<Icon name="person" /> }
                        style={{ marginBottom:10 }}
                    />
                    <Button title="Entrar" icon="logo-google" />
                </View>
            </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    )
}

export { LoginScreen }