import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    containerInput:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        borderWidth:1,
        borderRadius:5,
        borderColor:Colors.placeholder,
        height:48,
    },
    input:{
        height:48,
        paddingHorizontal:5,
    },
    contentLeft:{
        width:'12%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.placeholder
    },
    contentRight:{
        width:'12%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.placeholder
    }
});

export { styles };