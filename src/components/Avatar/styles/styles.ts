import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        width:52,
        height:52,
        borderRadius:52,
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