type ValidateAndFormatValueProps = {
    currentValue:string,
    min?:number;
    max?:number;
}

export const validateAndFormatValue = ({ 
    currentValue, 
    min, 
    max
} : ValidateAndFormatValueProps) => {
    const formattedValue = currentValue.replace(/[^0-9]/g,''); 

    if(max && Number(formattedValue) > max){
        return max;
    }

    if(min && Number(formattedValue) < min) {
        return min;
    }

    return Number(formattedValue);
}
