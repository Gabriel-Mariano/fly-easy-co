import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        position:'absolute',

        width:48,
        height:48,
        borderRadius:48,
        backgroundColor:Colors.primary,

       justifyContent: "center",
       alignItems:"center",

    },
});

export { styles };