import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    cardFly:{
        flexGrow:1,
        height:110,
        backgroundColor:Colors.white,
        borderRadius:15,
        
        elevation:2,
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 },
    },
    label:{
        color:Colors.unBlue,
        fontSize:13
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    header:{
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    containerImage:{
        width:'100%',
        height:'65%',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    }
});

export { styles };