import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@src/components/Text";
import { styles } from "./styles/styles";

interface IButtonProps extends TouchableOpacityProps {
    title:string;
    icon?:string;
    customTitle?:StyleProp<TextStyle>,
}

const Button:React.FC<IButtonProps> = ({ title, icon, customTitle, ...rest}) => {
    const renderIcon = () => {
        return icon 
            ? <Icon name={icon} testID="icon-id"/>
            : null
    }

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {renderIcon()}
            <View>
                <Text style={customTitle}>{title}</Text>
            </View>
            {icon && <View/>}
        </TouchableOpacity>
    )
}

export { Button };