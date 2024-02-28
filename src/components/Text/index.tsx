import React from "react";
import { Text as RNText, TextProps } from "react-native";
import { styles } from './styles/styles';

interface ITextProps extends TextProps {}

const Text:React.FC<ITextProps> = (props) => {
    return (
        <RNText {...props} style={[styles.text, props.style]} />
    )
}

export { Text };