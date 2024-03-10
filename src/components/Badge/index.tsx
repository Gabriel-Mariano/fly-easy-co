import React from "react";
import { View } from "react-native";
import { Text } from "../Text";
import { IAirProgressProps } from "../AirProgress";
import { Colors } from "@src/themes";
import { styles } from "./styles/styles";

interface IBadgeProps {
    status:IAirProgressProps['status'],
}

const Badge:React.FC<IBadgeProps> = ({ status }) => {
    const colors = {
        "Agendado":Colors.frenchBlue,
        "Em Rota":Colors.primary,
        "Pousado":Colors.success
    }

    return (
        <View 
            testID="badge-id"
            style={[
                styles.badge,
                {
                    backgroundColor: colors[status]
                }
            ]}>
            <Text style={styles.badgeTitle}>{status}</Text>
        </View>
    )
}

export { Badge };