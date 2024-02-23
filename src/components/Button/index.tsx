import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles/styles";

interface IButtonProps extends TouchableOpacityProps {
    title:string;
    icon?:string;
}

const Button:React.FC<IButtonProps> = ({ title, icon, ...rest}) => {
    const renderIcon = () => {
        return icon 
            ? <Icon name={icon} />
            : null
    }

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {renderIcon()}
            <View>
                <Text>{title}</Text>
            </View>
            <View/>
        </TouchableOpacity>
    )
}

export { Button };