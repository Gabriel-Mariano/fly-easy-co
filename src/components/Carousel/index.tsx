import React, { useRef, useState } from "react";
import { ScrollView, View, TouchableOpacity, Image, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { Text } from "../Text";
import { ImageProps } from "react-native";
import { VectorIcon, Icon } from "../Icons";
import { Colors } from "@src/themes";
import { styles } from "./styles/styles";
import Dots from "../Dots";

export interface IDataCarouselProps {
    id:string,
    image:ImageProps,
    title:string, 
    description:string,
    points?:string,
}

export interface ICarouselProps {
    data:IDataCarouselProps[],
    labelCarousel?:string;
    showDots?:boolean
}

const windowWidth = Dimensions.get('window').width;

const Carousel:React.FC<ICarouselProps> = ({ data, labelCarousel, showDots = true }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const value = data.length * 20 ;

        const contentSizeWidth = event.nativeEvent.contentSize.width;

        const slideWidth = event.nativeEvent.layoutMeasurement.width;
        
        const offset = event.nativeEvent.contentOffset.x;

        const calc = offset / (slideWidth - value);
        
        let index = Math.ceil(calc);
        
        if(offset + slideWidth >= contentSizeWidth ){
            index = data.length - 1; 
        }
        
        setActiveIndex(index);
    };

    return (
        <>
        {labelCarousel && (
            <Text style={styles.carouselLabel}>{labelCarousel}</Text>
        )}
        <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            decelerationRate="fast"
            bounces
            scrollEventThrottle={16}
            onScroll={handleOnScroll}
            snapToOffsets={[...Array(data.length)].map(
                (x,i)=> { 
                    return i * (windowWidth * 0.40 - 40) + (i - 1 ) * 40
                },
            )}
            contentContainerStyle={{
                paddingLeft:20,
                paddingRight:20,
                gap:10
            }}
            style={styles.containerCarousel}
        >
            {data.map((item)=> (
                <TouchableOpacity onPress={()=> {}} style={styles.carouselItem} key={item.id}>
                    <View>
                        <Image 
                            source={item.image}
                            alt="localidade-país" 
                            style={styles.imageCarousel}
                            resizeMethod="scale"
                            resizeMode="cover"
                        />
                        {item.points && (
                            <View style={styles.wrapperPoint}>
                                <VectorIcon type={Icon.MaterialCommunityIcons} name="star" color={Colors.light}/>
                                <Text>{item.points}</Text>    
                            </View>
                        )}
                    </View>
                    <View style={styles.wrapperText}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>
                            {item.description} 
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
        <Dots totalDots={data.length} activeDotIndex={activeIndex}  minDots={2} hideDots={!showDots}/>
        </>
    )
}

export { Carousel };