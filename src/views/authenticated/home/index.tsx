import React, { useEffect, useState } from "react";
import { ScrollView, View, ImageProps, Pressable, Switch } from "react-native";
import { styles } from "./styles/styles";
import { FlightStatus } from "@src/components/AirCardHeader";
import { Text } from "@src/components/Text";
import { Input } from "@src/components/Input";
import { VectorIcon, Icon } from "@src/components/Icons";
import { Colors } from "@src/themes";
import { CounterInput } from "@src/components/CounterInput";
import { Button } from "@src/components/Button";
import { FabButton } from "@src/components/Fab";
import { SelectDate } from "@src/components/SelectDate";
import { getTimeZoneLocalWithDayJs } from "@src/utils/getTimezoneLocal";

import Call from '@src/assets/call2.png';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { offers, options } from "@src/data/fake";
import { CardPoint } from "@src/components/CardPoint";
import { CardFly } from "@src/components/CardFly";
import { Carousel, IDataCarouselProps } from "@src/components/Carousel";
import { Banner } from "@src/components/Banner";
import { IFlightsProps } from "@src/@types/flights";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParam } from "@src/routes/authenticated/stack";

dayjs.extend(utc);
dayjs.extend(timezone);

function HomeScreen() {
    
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [isFullScreenCard, setIsFullScreenCard] = useState(true);
    const [isEnableReturn, setIsEnableReturn] = useState(true);

    const [date, setDate] = useState<any>(undefined);
    const [initialDate, setInitialDate] = useState<any>(undefined);
    const [finalDate, setFinalDate] = useState<any>(undefined);

    const [errorDate, setErrorDate] = useState("");
    const [errorInitialDate, setErrorInitialDate] = useState("");
    const [errorFinalDate, setErrorFinalDate] = useState("");

    const [amountOfAdult, setAmountOfAdult] = useState(5);
    const [amountChild, setAmountChild] = useState(0);

    const [dataCarousel, setDataCarousel] = useState<IDataCarouselProps[]>([]);

    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParam>>();

    useEffect(()=> {
        const formattedDateCarousel = offers.map((item)=> {
            const buildDescription = item.state ? `${item?.state}, ${item.country}` : item.country;

            return {
                id:item.id,
                image:item.image,
                title:item.city, 
                description:buildDescription,
                points:item.points
            }
        });
        setDataCarousel(formattedDateCarousel);
    },[])

    const invert = () => {
        setOrigin(destination);
        setDestination(origin);
    }

    const toggleSwitch = () => {
        setIsEnableReturn(!isEnableReturn);
    }

    const decrement = () => {
        setAmountOfAdult((old)=> {
            if(old > 0){
                return Number(old) - 1
            } else {
                return Number(old)
            }
        })
    }

    const increment = () => {
        setAmountOfAdult((old)=> Number(old) + 1)
    }

    const decrementChild = () => {
        setAmountChild((old)=> {
            if(old > 0){
                return Number(old) - 1
            } else {
                return Number(old)
            }
        })
    }

    const incrementChild = () => {
       setAmountChild((old)=> old + 1);4
    }

    const resizeAeroCard = () => {
        setIsFullScreenCard(!isFullScreenCard);
    }

    const validateFields = (init:string, end:string) => {
        if(init !== undefined) {
            setErrorInitialDate("");
        } else {
            setErrorInitialDate("Escolha a data da ida");
            return false
        }
        if(end !== undefined) {
            setErrorFinalDate("");
           
        } else {
            setErrorFinalDate("Escolha a data da volta");
           return false;
        }
        return true;
    }

    const validateDate = (date:string) => {
        if(date !== undefined) {
            setErrorDate("");
            return true;
        } else {
            setErrorDate("Escolha uma data");
            return false;
        }
    }

    const handleSearch = () => {
        const startDate = isEnableReturn ? initialDate : date;

        const init = getTimeZoneLocalWithDayJs(startDate);
        const end  = getTimeZoneLocalWithDayJs(finalDate); 

        const validatedFields = isEnableReturn ? validateFields(init, end) : validateDate(init)
        if(!validatedFields) {
            return;
        }

        const payload = {
            origin: origin,
            destination:destination,
            startDate: init,
            endDate: end,
            amountOfAdult:amountOfAdult,
            amountChild:amountChild
        }

        navigate("TicketList", payload);
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom:40}}>
            
           

            <View style={styles.top}/>
            <View style={styles.body}> 
                <View style={[
                    styles.questions,
                    {
                        height:isFullScreenCard ? 'auto' : 60,
                    }
                ]}>
                    <View style={styles.header}>
                        <View style={{ flexDirection:'row'}}>
                            <VectorIcon type={Icon.MaterialIcons} name="airplane-ticket" color={Colors.unBlue}  size={18} />
                            <Text style={styles.headerTitle}>PASSAGENS AÉREAS</Text>
                        </View>
                        <Pressable onPress={resizeAeroCard}>
                            <VectorIcon 
                                type={Icon.MaterialIcons} 
                                name="zoom-out-map" 
                                size={18} 
                            />
                        </Pressable>
                    </View>
                    {isFullScreenCard && (
                    <>
                        <View style={styles.inputWrapper}>
                            <Input 
                                placeholder="Busque por aeroporto ..." 
                                label="De onde?" 
                                value={origin}
                                onChangeText={(e)=> setOrigin(e)}
                                labelStyle={{
                                    color:Colors.unBlue
                                }}
                            />
                            <FabButton 
                                onPress={invert}
                                icon={"swap-vertical"} 
                                iconType={Icon.MaterialCommunityIcons} 
                                iconColor={Colors.white}
                                customFab={styles.customFab}
                                // testID="fab-button-id"
                            />
                            <Input 
                                placeholder="Busque por aeroporto ..." 
                                label="Para onde?" 
                                value={destination}
                                onChangeText={(e)=> setDestination(e)}
                                labelStyle={{
                                    color:Colors.unBlue
                                }}
                            />
                        </View>
                        <View style={styles.contentSwitch}>
                            <Text style={styles.labelSwitch}>Habilitar ida e volta?</Text>
                            <Switch
                                trackColor={{false: '#767577', true: Colors.placeholder}}
                                thumbColor={isEnableReturn ? Colors.primary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnableReturn}
                            />
                        </View>
                        <View>
                            <SelectDate 
                                label={isEnableReturn ? "Data da ida" : "Data"}
                                placeholder="Selecione a data de ida"
                                mode={isEnableReturn ? "range" : "single"}
                                date={isEnableReturn ? initialDate : date }
                                initialDate={initialDate}
                                finalDate={finalDate}
                                onChangeDate={(data: any) => {
                                    if(data.date){
                                        setDate(data.date);
                                        return setInitialDate(data.date);
                                    }
                                    
                                    setDate(data.startDate);
                                    setInitialDate(data.startDate);
                                    setFinalDate(data.endDate);
                                }}
                                onCleanField={()=> { setDate(undefined); setInitialDate(undefined) }}
                                errorMessage={isEnableReturn ?  errorInitialDate : errorDate}
                            />
                            
                            {isEnableReturn && (
                                <SelectDate 
                                    label="Data da volta"
                                    placeholder="Selecione a data da volta"
                                    mode="range"
                                    date={finalDate}
                                    initialDate={initialDate}
                                    finalDate={finalDate}
                                    option={'end'}
                                    onChangeDate={(data: any) => {
                                        setInitialDate(data.startDate);
                                        setFinalDate(data.endDate);
                                    }}
                                    onCleanField={()=> setFinalDate(undefined) }
                                    errorMessage={errorFinalDate}
                                />
                            )}
                        </View>
                    
                        <View style={styles.counterWrapper}>
                            <CounterInput 
                                label="Adultos"
                                decrement={decrement}
                                increment={increment}
                                value={amountOfAdult}
                                setterValue={setAmountOfAdult}
                                min={1}
                                max={10}
                            />
                            <CounterInput 
                                label="Crianças"
                                decrement={decrementChild}
                                increment={incrementChild}
                                value={amountChild}
                                setterValue={setAmountChild}
                                min={3}
                                max={10}
                            />
                        </View>
                        <Button title="Buscar Voos" customTitle={styles.questionButtonTitle} onPress={handleSearch}/>
                    </>
                )}
                </View>

                <View style={styles.benefitsContainer}>
                    <Text style={styles.benefitContainerLabel}>
                        BENEFÍCIOS NA FLY
                    </Text>
                    <View style={styles.containerCard}>
                        <CardPoint point={128} onPress={()=> {}}/>
                        <CardFly />
                    </View>
                    <View style={styles.benefit}>
                        <Text style={styles.labelSwitch}>
                            Meus benefícios
                        </Text>
                            
                        <View style={styles.wrapperBenefit}>
                            <Text style={styles.badge}>
                                Cliente digital
                            </Text>
                            <VectorIcon 
                                type={Icon.MaterialCommunityIcons} 
                                name="chevron-right" 
                                size={22} 
                            />
                        </View>
                    </View>
                </View>
            </View>
            <Carousel data={dataCarousel} labelCarousel="PROMOÇÕES RELÂMPAGO"/>
            <View style={{ paddingHorizontal:20, marginVertical:30 }}>
                <Banner 
                    title="Precisa de ajuda?"
                    description={`Fale conosco, tire suas dúvidas e \n acompanhe seus chamados`}
                    image={Call}
                    onPress={()=> {}}

                />
            </View>
            {/* <Avatar/> */}
           
            
            {/* <FlatList
                data={flights}
                renderItem={({ item })=> <Ticket props={item}/>}
                keyExtractor={(item)=> item.id}
                contentContainerStyle={{ gap: 10, paddingVertical:10 }}
                showsVerticalScrollIndicator={false}
            /> */}
           
        </ScrollView>
    );
}

export { HomeScreen }


