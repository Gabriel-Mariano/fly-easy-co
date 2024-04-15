import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageProps } from 'react-native';
import { VectorIcon, Icon } from '../Icons';
import { Colors } from '@src/themes';
import { styles } from './styles';

interface IBannerProps {
    image:ImageProps;
    title:string;
    description:string;
    onPress:()=>void;
}

const Banner = (props: IBannerProps) => {
    const { image, title, description, onPress } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Image source={image} style={styles.image}/>
            <View style={styles.wrapperText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <View>
                <VectorIcon 
                    type={Icon.MaterialIcons} 
                    name="arrow-forward-ios" 
                    size={22} 
                    color={Colors.primary}
                />
            </View>
        </TouchableOpacity>
    )
}

export { Banner }; 