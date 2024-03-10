import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',

        width:110,
        height:5,
        backgroundColor:Colors.placeholder
    },
    start:{
        position:'absolute',
        left:-10,
        width:12,
        height:12,
        borderRadius:12,
        backgroundColor:Colors.unBlue,

        justifyContent:'center',
        
    },
    end:{
        position:'absolute',
        right:-10,
        width:12,
        height:12,
        borderRadius:12,
        backgroundColor:Colors.placeholder,

        justifyContent:'center',
    }
});

export { styles };