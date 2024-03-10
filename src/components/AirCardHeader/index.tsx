import React from "react"; 
import { View, Image, ImageProps } from "react-native";
import { Badge } from "../Badge";
import { Text } from "../Text";
import { styles } from "./styles/styles";

export type FlightStatus = "Agendado" | "Em Rota" | "Pousado";

interface IAirCardHeaderProps {
    logo: ImageProps,
    code:string,
    company:string,
    status:FlightStatus
}

const AirCardHeader:React.FC<IAirCardHeaderProps> = ({ logo, code, company, status }) => {
    return (
        <View style={styles.header} testID="airCardHeader-id">
            <View style={styles.contentLeft}>
                <Image source={logo} alt="logo-company" style={styles.image}/>
                <View>
                    <Text style={styles.headerTitle}>{code}</Text>
                    <Text style={styles.headerSubtitle}>{company}</Text>
                </View>
            </View>
            <Badge status={status}/>
        </View>
    )
}

export { AirCardHeader };