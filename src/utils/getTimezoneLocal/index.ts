import { Platform } from "react-native";

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getTimeZoneLocal = (dateString:string, locale?:string, dateTimeOptions?:Intl.DateTimeFormatOptions) => {
    if(!dateString) {
        return dateString;
    }
    
    const date = new Date(dateString);

    const options = { 
        timeZone:'America/Sao_Paulo',
    }

    const timezoneLocal = date.toLocaleDateString(locale || 'pt-BR', dateTimeOptions || options);

    const splittedTimezone = Platform.OS === "ios" ?  timezoneLocal.split(" ") :  timezoneLocal.split(",");
        
    const part = splittedTimezone[0].split('/');

    const day = part[0];
    const month = part[1];
    const year = part[2];

    const formattedDate = year + '-' + month + '-' + day;

    return formattedDate;
}

export const getTimeZoneLocalWithDayJs = (dateInString:string) => {
    if(!dateInString) {
        return dateInString;
    }

    const formattedDate = dayjs(dateInString).format('YYYY-MM-DD');

    return formattedDate;
}