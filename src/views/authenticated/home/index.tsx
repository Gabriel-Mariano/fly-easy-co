import React from "react";
import { View } from "react-native";
import { Text } from "@src/components/Text";
import { styles } from "./styles/styles";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello everyone 🖖🏼</Text>
        </View>
    )
}

export { HomeScreen }