import React, { useState } from "react";
import { View, Modal, SafeAreaView, TouchableOpacity, Text, Pressable } from "react-native";
import { Icon, VectorIcon } from "../Icons";
import { Text as TextCustomize } from "../Text";
import { Colors } from "@src/themes";
import { styles } from "./styles/styles";
import DateTimePicker, { DateType, ModeType } from "react-native-ui-datepicker";
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/pt-br';

dayjs.extend(utc);
dayjs.extend(timezone);

interface ISelectDate {
    date:DateType,
    initialDate?:DateType,
    finalDate?:DateType,
    option?:'start' | 'end',
    onChangeDate:(data: DateType | { startDate: DateType, endDate: DateType })=>void,
    onCleanField?:()=> void,
    mode: ModeType,
    label?:string,
    placeholder?:string,
    errorMessage?:string,
}

const SelectDate:React.FC<ISelectDate> = ({
    date,
    initialDate,
    finalDate,
    label,
    option,
    onChangeDate,
    onCleanField,
    mode,
    placeholder,
    errorMessage
}) => {
    dayjs.locale('pt-br');

    const minimumDate = dayjs().subtract(1,'day');

    const [modalVisible, setModalVisible] = useState(false);

    const lazy = () => {
        setModalVisible(true);
    }

    const handleDateChange = (data:any) => {
        if(mode === "single") {
            return onChangeDate(data);
        }

        if(mode === "range" && option === "end"){
            const formattedDate = data;

            formattedDate.startDate = initialDate;
            formattedDate.endDate = data.endDate;
            
            return onChangeDate(formattedDate);
        }
        
        onChangeDate(data);
    };

    const handleApply = () => {
        setModalVisible(false);
    }

    const clearAll = () => {
        onChangeDate("");
    }

    const showDate = () => {
        return dayjs(date).format("LL");
    }

    return (
        <View>
            {label && 
                <TextCustomize style={styles.label}>{label}</TextCustomize>
            }
            <TouchableOpacity style={styles.input} onPress={lazy}>
                <View style={styles.placeholder}>
                    <VectorIcon type={Icon.MaterialCommunityIcons} name="calendar" color="#767676"/>
                    <Text style={styles.placeholder}>
                        {date ? showDate() : placeholder}
                    </Text>
                </View>
                {date && (
                    <Pressable style={styles.touchClean} onPress={onCleanField}>
                        <VectorIcon type={Icon.MaterialCommunityIcons} name="close-circle" color={Colors.unBlue} />
                    </Pressable>
                )}    
            </TouchableOpacity>
            {errorMessage && 
                <TextCustomize style={styles.errorMessage}>{errorMessage}</TextCustomize>
            } 
            <Modal 
                animationType="slide"
                visible={modalVisible}
                onRequestClose={()=> setModalVisible(false)}
            >
               <SafeAreaView style={styles.safeAreaView}/>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=> setModalVisible(false)} >
                            <VectorIcon type={Icon.MaterialCommunityIcons} name="chevron-left" color="#FFF" size={24} />
                        </TouchableOpacity>
                        <TextCustomize style={styles.headerTitle}>
                            Selecione uma data
                        </TextCustomize>
                        <TouchableOpacity onPress={()=> setModalVisible(false)}>
                            <TextCustomize style={styles.cancel}>
                                Cancelar
                            </TextCustomize>
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        mode={mode}
                        date={date}
                        onChange={handleDateChange}
                        startDate={initialDate}
                        endDate={finalDate}
                        minDate={minimumDate}
                        selectedItemColor={Colors.primary}
                        headerTextStyle={{ textTransform: 'capitalize' }}
                        displayFullDays
                        locale="pt-br"
                    />
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btnClean} onPress={clearAll}>
                            <TextCustomize>Limpar</TextCustomize>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSend} onPress={handleApply}>
                            <TextCustomize>Aplicar</TextCustomize>
                        </TouchableOpacity>
                    </View>
            </Modal>
        </View>
    )
}

export { SelectDate }