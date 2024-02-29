import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./routes/routes";

function Main(){
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Routes/>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default Main;