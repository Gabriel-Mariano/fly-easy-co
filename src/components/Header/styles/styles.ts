import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    safeAreaView:{
        backgroundColor:Colors.primary
    },
    header:{
        width:'100%',
        height:44,
        paddingHorizontal:25,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.unBlue,
    },
    logo:{
        color:Colors.white,
        fontFamily: 'Poppins-Medium'
    },
    options:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
});

export { styles };