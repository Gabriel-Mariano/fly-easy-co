import React from "react";
import Me from "@src/assets/me.jpeg";
import { View, Image } from "react-native";
import { styles } from "./styles/styles";

interface IAvatarProps {
    imageUrl?:string,
    alt?:string
}

const Avatar:React.FC<IAvatarProps> = ({ imageUrl, alt }) => {
    return (
        <View style={styles.container}>
            <Image 
                testID="avatar-id"
                style={styles.image} 
                source={imageUrl ? imageUrl : Me} 
                alt={alt}
            />
        </View>
    )
}

export { Avatar };