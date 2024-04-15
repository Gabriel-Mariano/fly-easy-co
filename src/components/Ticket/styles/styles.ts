import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:240,

        backgroundColor:Colors.white,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.placeholder,
    },
    textDate:{
        fontSize:12,
        color:Colors.unBlue
    },
    content:{
        paddingHorizontal:20,
        paddingVertical:20,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    wrapperStartedDate:{
        flexDirection:'row',
        // alignItems:'baseline',
        marginBottom:10
    },
    wrapperEndDate:{
        flexDirection:'row',
        // alignItems:'baseline',
        marginBottom:10
    },
    icon:{
        color:Colors.white,
    },
    wrapperIcon:{
        width:20,
        height:20,
        borderRadius:50,
        backgroundColor:Colors.unBlue,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5
    },
    text:{
        color:Colors.black
    },
    acronym:{
        fontSize: 28,
        fontFamily:'Poppins-Semibold',
        color:Colors.black
    },
    hours:{
        color:Colors.unBlue,
        fontFamily:'Poppins-Semibold',
    }
});

export { styles };