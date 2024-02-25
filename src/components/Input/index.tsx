import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { TextInput, View, Text } from "react-native";
import { styles } from "./styles/styles";

interface IInputProps extends TextInputProps {
    label?:string,
    contentLeft?:ReactNode,
    contentRight?:ReactNode
}

const Input:React.FC<IInputProps> = ({ 
    label,
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
        {label && <Text>{label}</Text>}
        <View style={[styles.containerInput, rest.style]}>
            {renderOnTheLeft()}
            <TextInput 
                {...rest}
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