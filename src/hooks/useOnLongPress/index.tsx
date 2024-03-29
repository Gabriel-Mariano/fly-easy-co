import { useRef } from "react";

const useOnLongPress = (callback:()=> void, delay = 200) => {
    const timeRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        timeRef.current = setInterval(callback, delay);
    }

    const stopInterval = () => {
        if(timeRef.current) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    }

    return {
        onPressIn: startInterval,
        onPressOut: stopInterval
    }
}   

export { useOnLongPress };