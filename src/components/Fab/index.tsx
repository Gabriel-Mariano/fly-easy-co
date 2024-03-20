import React from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { VectorIcon } from "../Icons";
import { IconProps } from "react-native-vector-icons/Icon";
import { styles } from "./styles/styles";

interface IFabButtonProps extends PressableProps {
    icon:string,
    iconType:IconProps | any,
    iconColor?:string,
    customFab?:StyleProp<ViewStyle>
}

const FabButton:React.FC<IFabButtonProps> = ({ icon, iconType,iconColor, customFab, ...rest }) => {
    return (
        <Pressable {...rest} style={[styles.container, customFab]}>
            <VectorIcon type={iconType} name={icon} color={iconColor} />
        </Pressable>
    )
}

export { FabButton };