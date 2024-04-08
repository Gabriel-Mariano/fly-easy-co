import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        width:40,
        height:36,
        borderRadius:48,
        backgroundColor:Colors.placeholder,

        justifyContent:'center',
        alignItems:'center'
    },
    image:{
       width:"100%",
       height: "100%",
       borderRadius:52,
       resizeMode:'cover'
    }
});

export { styles };