import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    cardPoint:{
        width:120,
        height:110,
        padding:10,
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
    points:{
        fontFamily:"Poppins-Bold",
        fontSize:16,
        color:Colors.unBlue
    },
    icon:{
        textAlign:'right',
    }
});

export { styles };