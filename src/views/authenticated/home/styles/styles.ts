import { Platform, StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        width:'100%',
        backgroundColor:Colors.primary,
        height:60,
        paddingHorizontal:40,

        elevation:2,
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 },
    },  
    body:{
        zIndex:2,
        paddingHorizontal:20,
    },
    questions:{
        width:'100%',
        
        justifyContent:'center',
        borderRadius:20,
        paddingVertical:20,
        paddingHorizontal:20,
        marginTop:-30,
       
        backgroundColor:Colors.white,
        gap:10,
    },
    header:{
        flexDirection:'row',

        justifyContent:'space-between',
    },
    headerTitle:{
        fontFamily:"Poppins-Bold",
        color:Colors.unBlue,
        marginLeft:5
    },
    contentSwitch:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginVertical:10
    },
    labelSwitch:{
       marginRight:5,
       color:Colors.unBlue
    },
    inputWrapper:{
        gap:6,
    },
    questionButtonTitle:{
        fontFamily:"Poppins-Bold",
        color:Colors.white
    },
    customFab:{
        top:Platform.OS === "ios" ? 64 : 70,
        right:15,
        zIndex:2,
        backgroundColor:Colors.unBlue
    },
    counterWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20
    },
    titleList:{
        paddingVertical:20,
        paddingHorizontal:20
    },
    containerCard:{
        width:'100%',
        flexDirection:'row',
        marginVertical:20,
        gap:10,
    },
    benefitsContainer:{
        marginVertical:30,
    },
    benefitContainerLabel:{
        color:Colors.unBlue,
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize:13,
    },
    benefit:{
        width:'100%',
        padding:10,
        backgroundColor:Colors.white,
        borderRadius:15,
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        elevation:2,
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 },
    },
    wrapperBenefit:{
        flexDirection:'row',
        alignItems:'center',
    },
    badge:{
        padding:8,
        borderRadius:15,
        backgroundColor:Colors.frenchBlue,
        color:Colors.white,
        overflow: 'hidden',
    }
});

export { styles };