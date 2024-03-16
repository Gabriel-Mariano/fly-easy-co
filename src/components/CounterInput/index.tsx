import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Input } from "../Input";
import { Text } from "../Text";
import { validateAndFormatValue } from "@src/utils/validateValue";
import { useOnLongPress } from "@src/hooks/useOnLongPress";
import { Colors } from "@src/themes";
import { styles } from "./styles/styles";

interface ICounterInput {
    value:number,
    setterValue:React.Dispatch<React.SetStateAction<any>>,
    decrement:()=>void,
    increment:()=>void,
    label?:string,
    min?:number,
    max?:number,
    disabled?:boolean,
}

const CounterInput:React.FC<ICounterInput> = ({
    decrement,
    increment,
    value,
    setterValue,
    label,
    min,
    max,
    disabled
}) => {

    const onChangeText = (newValue:string) => {
        setterValue(newValue)
    }

    const decrementFast = () => {
        if(min && value >= min) {
            setterValue((old:number)=> Math.max(old - 1, min)) // Retorna o maior valor passado por props
        } else if (!min) {
            decrement();
        }
    }

    const incrementFast = () => {
        if(max && value < max) {
            setterValue((old:number)=> Math.min(old + 1, max)) // Retorna o menor valor passado por props
        } else if (!max) {
            increment();
        }        
    }

    const handleOnBlur = () => {
        const currentValue = String(value);
        const formattedValue = validateAndFormatValue({ currentValue, min, max });
        setterValue(formattedValue);
    }

    const handleDecrementLongPress = useOnLongPress(decrementFast);
    const handleIncrementLongPress = useOnLongPress(incrementFast);

    return (
        <View>
           {label && (
                <Text style={styles.label}>
                    {label}
                </Text>
            )}
           <View style={styles.container}>
                <TouchableOpacity 
                    onPressIn={decrement}
                    onPressOut={handleDecrementLongPress.onPressOut}
                    onLongPress={handleDecrementLongPress.onPressIn}
                    disabled={min && value <= min ? true : false}
                    style={[styles.decrementButton,
                        {
                            backgroundColor: min && value <= min ? Colors.placeholder : Colors.unBlue
                        }
                    ]} 
                >
                    <Text style={styles.decrementButtonText}>
                    -
                    </Text>
                </TouchableOpacity>
                <View>
                    <Input 
                        value={String(value)}
                        onChangeText={onChangeText} 
                        onBlur={handleOnBlur}
                        keyboardType="numeric"
                        textAlign="center"
                        style={styles.input}
                        editable={!disabled}
                    />
                </View>
                <TouchableOpacity 
                    onPressIn={increment}
                    onPressOut={handleIncrementLongPress.onPressOut}
                    onLongPress={handleIncrementLongPress.onPressIn}
                    disabled={max && value >= max ? true : false}
                    style={[styles.incrementButton,
                        {
                            backgroundColor: max && value >= max ? Colors.placeholder : Colors.unBlue
                        }
                    ]} 
                >
                    <Text style={styles.decrementButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

export { CounterInput };