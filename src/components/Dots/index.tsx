import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles/styles";

interface IDotsProps {
    totalDots: number;
    activeDotIndex: number;
    minDots:number;
    hideDots?:boolean;
}

const Dots: React.FC<IDotsProps> = ({ totalDots, activeDotIndex, minDots, hideDots }) => {
    
    const renderTotalDots = () => {
        if(totalDots <= minDots || hideDots){
            return 0;
        }
        if(totalDots > 0 && totalDots <= 3 && activeDotIndex === 0) {
            return 2;
        }
        return totalDots;
    }

    return (
        <View style={styles.container}>
            {Array.from({ length: renderTotalDots() }, (_, index) => {  
                return (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.dot,
                        index === activeDotIndex && styles.activeDot,
                        index === 0 && activeDotIndex === 0 && totalDots > 2 && styles.mergedDot,
                    ]}
                />
            )} ) }
        </View>
    );
};



export default Dots;
