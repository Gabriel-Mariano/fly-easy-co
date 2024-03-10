import React, { useState } from "react";
import { FlatList, ImageProps, View } from "react-native";
import { styles } from "./styles/styles";
import { Card } from "@src/components/Card";
import { FlightStatus } from "@src/components/AirCardHeader";
import LogoLatam from "@src/assets/latam.png";

export interface IFlightsProps {
    id:string,
    logo: ImageProps,
    code:string,
    company:string,
    status:FlightStatus,
    startDate:string,
    endDate:string,
    origin:string,
    destination:string,
    acronymOrigin:string,
    acronymDestination:string,
    departureTime:string,
    landingTime:string
    
}

function HomeScreen() {
    const [flights, setFlights] = useState<IFlightsProps[]>([
        {
            id:"1",
            logo: LogoLatam,
            code:"AD 4024",
            company:"Latam Brazilian",
            status:"Em Rota" as FlightStatus,
            startDate:"23 Jan 2024",
            endDate:"31 Jan 2024",
            origin:"New York",
            destination:"Boston",
            acronymOrigin:"NYC",
            acronymDestination:"BOS",
            departureTime:"05:35",
            landingTime: "07:15"
        },
        {
            id:"2",
            logo: LogoLatam,
            code:"AD 4024",
            company:"Latam Brazilian",
            status:"Agendado" as FlightStatus,
            startDate:"23 Jan 2024",
            endDate:"31 Jan 2024",
            origin:"New York",
            destination:"Boston",
            acronymOrigin:"NYC",
            acronymDestination:"BOS",
            departureTime:"05:35",
            landingTime: "07:15"
        },
        {
            id:"3",
            logo: LogoLatam,
            code:"AD 4024",
            company:"Latam Brazilian",
            status:"Pousado" as FlightStatus,
            startDate:"23 Jan 2024",
            endDate:"31 Jan 2024",
            origin:"New York",
            destination:"Boston",
            acronymOrigin:"NYC",
            acronymDestination:"BOS",
            departureTime:"05:35",
            landingTime: "07:15"
        }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={flights}
                renderItem={({ item })=> <Card props={item}/>}
                keyExtractor={(item)=> item.id}
                contentContainerStyle={{ gap: 10, paddingVertical:10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export { HomeScreen }