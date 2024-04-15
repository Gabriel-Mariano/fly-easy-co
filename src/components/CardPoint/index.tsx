import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { VectorIcon, Icon } from "../Icons";
import { styles } from "./styles/styles";
import { Colors } from "@src/themes";

interface ICardPoint extends TouchableOpacityProps {
    point:number,
}

const CardPoint:React.FC<ICardPoint> = ({ point, ...rest }) => {
    return (
        <TouchableOpacity style={styles.cardPoint} {...rest}>
            <Text style={styles.label}>
                Meus pontos
            </Text>
            <Text style={styles.points}>
                {point}
            </Text>
            <VectorIcon 
                type={Icon.MaterialIcons} 
                name="workspace-premium" 
                size={42} 
                style={styles.icon}
                color={Colors.light}
            />
        </TouchableOpacity>
    )
}

export { CardPoint };