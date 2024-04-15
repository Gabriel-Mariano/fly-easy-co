import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Ticket } from "@src/components/Ticket";
import { IFlightsProps } from "@src/@types/flights";
import { api } from "@src/api/api.default";
import { Colors } from "@src/themes";
import { styles } from "./styles/styles";

import LogoLatam from "@src/assets/latam.png";

export type ITicketListScreenProps = {
    origin: string,
    destination:string,
    startDate: string,
    endDate: string,
    amountOfAdult?:number,
    amountChild?:number
}

type TicketList = {
    flights:IFlightsProps[];
}

type TicketDataResponse = {
    id_flights:string,
    origin: { 
        locate:string, 
        acronymOrigin:string 
    },
    destination:{ locate:string, acronymDestination:string },
    startDate: string,
    endDate: string,
    departureTime:string,
    landingTime: string,
    status: string,
    company:{
        name:string,
        logo?:string,
        code:string
    }
}

function TicketListScreen (props:any) {
    const [loading, setLoading] = useState(false);
    const [flights, setFlights] = useState<IFlightsProps[]>([]);

    useEffect(()=> {
        getTickets();
    },[]);

    const getTickets = async () => {
        setLoading(true);
        const res = await api.get("flights");
        setTimeout(()=> setLoading(false), 1000);
       

        if(res.status === 200) {
            const changedData = res.data.map((item:TicketDataResponse)=> {
                return {
                    id:item.id_flights,
                    logo: LogoLatam,
                    code:item.company.code,
                    company:item.company.name,
                    status:item.status,
                    startDate:item.startDate,
                    endDate:item.endDate,
                    origin:item.origin.locate,
                    destination:item.destination.locate,
                    acronymOrigin:item.origin.acronymOrigin,
                    acronymDestination:item.destination.acronymDestination,
                    departureTime:item.departureTime,
                    landingTime: item.landingTime
                }
            })
            setFlights(changedData)
        }
    }

    if(loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator  color={Colors.primary} size="large"/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={flights}
                renderItem={({ item })=> <Ticket props={item}/>}
                keyExtractor={(item)=> item.id}
                contentContainerStyle={styles.contentFlatlist}
                showsVerticalScrollIndicator={false}
            /> 
        </View>
    )
}

export { TicketListScreen }