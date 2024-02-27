import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

        width:'100%',
        height:48,

        borderRadius:5,
        backgroundColor:Colors.primary
    },
    titleButton:{
        fontFamily:'Poppins-SemiBold'
    }
});

export { styles };