import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { TextInput, View, StyleProp, TextStyle } from "react-native";
import { Text } from "../Text";
import { styles } from "./styles/styles";

interface IInputProps extends TextInputProps {
    label?:string,
    labelStyle?:StyleProp<TextStyle>,
    contentLeft?:ReactNode,
    contentRight?:ReactNode
}

const Input:React.FC<IInputProps> = ({ 
    label,
    labelStyle,
    contentLeft,
    contentRight,
    ...rest
}) => {

    const renderOnTheLeft = () => {
        return contentLeft && (
            <View style={styles.contentLeft}>
                {contentLeft}
            </View>
        );
    }

    const renderOnTheRight = () => {
        return contentRight && (
            <View style={styles.contentRight}>
                {contentRight}
            </View>
        );
    }

    return (
        <>
        {label && <Text style={labelStyle}>{label}</Text>}
        <View style={[styles.containerInput, rest.style]}>
            {renderOnTheLeft()}
            <TextInput 
                {...rest}
                placeholderTextColor="#767676"
                style={[
                    styles.input,
                    {
                        width: contentLeft && contentRight 
                            ? "76%"
                            : contentLeft 
                            ? "88%"
                            : contentRight 
                            ? "88%"
                            : "100%"
                    }
                ]}
            />
            {renderOnTheRight()}
        </View>
        </>
    )
}

export { Input };