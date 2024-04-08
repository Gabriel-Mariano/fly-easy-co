import { Platform, StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    safeAreaView:{
        backgroundColor:Colors.primary,

    },
    header:{
        width:'100%',
        height:50,
        backgroundColor:Colors.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:12,
        elevation:3,
    },
   label:{
       fontFamily:"Poppins-Regular",
       color:Colors.unBlue,
       marginVertical:4,
   },
   input:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        

        borderWidth:1,
        borderRadius:5,
        borderColor:Colors.placeholder,
        height:48,
        paddingLeft:5,
   },
   placeholder:{
        flexDirection:'row',
        gap:5,
        color:"#767676"
   },
   touchClean:{
    paddingHorizontal:10,
    height:'100%',
    justifyContent:'center'
   },
   errorMessage:{
    color:Colors.danger,
    paddingTop:5,
   },
   headerTitle:{
        color:Colors.black
   },
   cancel:{
        color:Colors.chocolate,
   },
   footer:{
       position:'absolute',
       bottom:0,
       width:'100%',
       height:Platform.OS === "ios" ? 110 : 80,
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:"center",
       backgroundColor:Colors.white
   },
   btnClean:{
       borderWidth:1,
       borderColor:Colors.dark,
    //    backgroundColor:Colors.light,
        backgroundColor:Colors.background,
       justifyContent:'center',
       alignItems:'center',
       width:160,
       height:48,
       borderRadius:5,
   },
   btnSend:{
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    width:160,
    height:48,
    borderRadius:5,
    backgroundColor:Colors.primary,
    borderColor:Colors.dark
   },
});

export { styles };