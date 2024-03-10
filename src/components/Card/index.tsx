import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Text } from "../Text";
import { Icon, VectorIcon } from "../Icons";
import { styles } from "./styles/styles";
import { AirProgress } from "../AirProgress";
import { AirCardHeader } from "../AirCardHeader";
import { IFlightsProps } from "@src/views/authenticated/home";

interface ICardFlightsProps extends TouchableOpacityProps {
    props: IFlightsProps;
}

const Card:React.FC<ICardFlightsProps> = ({ props, ...rest }) => {  
    return (
        <TouchableOpacity 
            style={styles.container} 
            testID="card-id"
            {...rest} 
        >
            <AirCardHeader 
                logo={props.logo}
                code={props.code}
                company={props.company}
                status={props.status}
            />
            <View style={styles.content}>
                <View>
                    <View style={styles.wrapperStartedDate}>
                        <View style={styles.wrapperIcon}>
                            <VectorIcon 
                                type={Icon.MaterialCommunityIcons} 
                                name="airplane-takeoff" 
                                size={15} 
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.textDate}>{props.startDate}</Text>
                    </View>
                    <Text style={styles.text}>{props.origin}</Text>
                    <Text style={styles.acronym}>{props.acronymOrigin}</Text>
                    <Text style={styles.hours}>{props.departureTime}</Text>
                </View>

                <AirProgress status={props.status} />

                <View style={{ alignItems:'flex-end' }}>
                    <View style={styles.wrapperEndDate}>
                        <View style={styles.wrapperIcon}>
                            <VectorIcon 
                                type={Icon.MaterialCommunityIcons} 
                                name="airplane-landing" 
                                size={15} 
                                style={styles.icon}
                            />
                        </View>
                            <Text style={styles.textDate}>{props.endDate}</Text>
                        </View>
                        <Text style={styles.text}>{props.destination}</Text>
                        <Text style={styles.acronym}>{props.acronymDestination}</Text>
                        <Text style={styles.hours}>{props.landingTime}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

export { Card };