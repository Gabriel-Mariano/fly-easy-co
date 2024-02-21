import { SafeAreaView } from "react-native";
import StackRoutes from "./routes/stack";
import { HomeScreen } from "./views/authenticated/home";

function Main(){
    return (
        <SafeAreaView style={{ flex:1 }}>
           <StackRoutes></StackRoutes>
        </SafeAreaView>
    )
}

export default Main;