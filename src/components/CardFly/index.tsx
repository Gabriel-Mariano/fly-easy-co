import React from "react";
import Plane from "@src/assets/plane2.jpg";
import { TouchableOpacity, TouchableOpacityProps, View, Image } from "react-native";
import { Text } from "../Text";
import { styles } from "./styles/styles";

interface ICardPoint extends TouchableOpacityProps {}

const CardFly:React.FC<ICardPoint> = ({ ...rest }) => {
    return (
        <TouchableOpacity style={styles.cardFly} {...rest}>
            <View style={styles.header}>
                <Text style={styles.label}>
                    Meus voos
                </Text>
            </View>
           <View style={styles.containerImage}>
                <Image 
                    source={Plane} 
                    alt="Avião voando" 
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

export { CardFly };