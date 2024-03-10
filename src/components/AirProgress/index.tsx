import React from "react";
import { View } from "react-native";
import { VectorIcon, Icon } from "../Icons";
import { Colors } from "@src/themes";
import { styles } from "./styles/styles";

export interface IAirProgressProps {
    status:"Agendado"| "Em Rota" | "Pousado" 
}

const AirProgress:React.FC<IAirProgressProps> = ({ status }) => {
    return (
        <View style={styles.container} testID="airProgress-id"> 
            <View style={styles.start}>
                { status === "Agendado" && (
                    <VectorIcon 
                        type={Icon.Ionicons} 
                        name="airplane"  
                        style={{
                            position:'absolute',
                            left:-12,
                            width:35,
                        }}
                        size={35}
                    />      
                )}
            </View>
            <View style={[
                {
                    width:status === "Em Rota" ? "50%" : status === "Pousado" ? "100%" : 0,
                    backgroundColor: Colors.unBlue,
                    maxWidth: '100%',
                    height:5,

                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center'
                }
            ]} testID="middleContainer-id">
               {status === "Em Rota" && (
                   <VectorIcon 
                        type={Icon.Ionicons} 
                        name="airplane"  
                        style={{
                            position:'absolute',
                            left: '65%', 
                            width:35,
                        }}
                        size={35}
                    />   
               )} 
           
            </View>
            <View style={[
                styles.end,
                { 
                    backgroundColor: status !== "Pousado" ? Colors.placeholder : Colors.unBlue
                }
            ]} testID="endContainer-id">
                {status === "Pousado" && (
                    <VectorIcon 
                        type={Icon.Ionicons} 
                        name="airplane"  
                        style={{
                            position:'absolute',
                            left:-12,
                            width:35,
                        }}
                        size={35}
                    />     
                )}
            </View>
        </View>
    )
}

export { AirProgress };