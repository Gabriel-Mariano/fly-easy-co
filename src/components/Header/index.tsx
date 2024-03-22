import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Avatar } from "../Avatar";
import { VectorIcon, Icon } from "../Icons";
import { Colors } from "@src/themes";
import { Text } from "../Text";
import { styles } from "./styles/styles";

const Header = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View  style={styles.header}>
                <Avatar />
                <Text style={styles.logo}>FlyEasyCO</Text>
                <View style={styles.options}>
                    <VectorIcon 
                        type={Icon.Ionicons} 
                        name="notifications" 
                        color={Colors.white}
                        size={24}
                    />
                    <VectorIcon 
                        type={Icon.Ionicons} 
                        name="settings" 
                        color={Colors.white}
                        size={24}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Header };