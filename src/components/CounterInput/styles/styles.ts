import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:45
    },
    label:{
        padding:10,
        color:Colors.unBlue
    },
    decrementButton:{
        justifyContent:"center",
        alignItems:"center",

        width:50, 
        height:'100%',
      
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,

        backgroundColor: Colors.unBlue,
    },
    decrementButtonText:{
        color:Colors.white,
        fontFamily:"Poppins-Medium"
    },
    input:{
        fontFamily:"Poppins-Regular",

        width:50,
        height:'100%',

        borderRadius:0,
        borderLeftWidth:0,
        borderRightWidth:0
    },
    incrementButton:{
        justifyContent:"center",
        alignItems:"center",

        width:50,
        height:'100%',
       
        backgroundColor: Colors.unBlue,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },
    incrementButtonText:{
        color:Colors.white,
        fontFamily:"Poppins-Medium"
    },
});

export { styles };