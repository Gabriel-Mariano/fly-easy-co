import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    header:{
        height:80,
        borderBottomWidth:1,
        borderBottomColor:Colors.placeholder,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
    },
    contentLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:48,
        height:48,
        borderRadius:5,
        backgroundColor:Colors.frenchBlue,
        marginRight:10
    },
    headerTitle:{
        fontWeight:'bold',
    },
    headerSubtitle:{
        fontSize:12,
        color:Colors.unBlue
    }
});

export { styles };