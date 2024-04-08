import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerCarousel:{
       marginVertical:20,
       
    },
    carouselLabel:{
        color:Colors.unBlue,
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize:13, 
        paddingHorizontal:20
    },
    carouselItem:{
        // width:140,
        width:width * 0.40,
        backgroundColor:Colors.white,
        borderRadius:15,
    },
    imageCarousel:{
        width:'100%',
        height:150,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    },
    wrapperPoint:{
        position:'absolute',
        left:0,
        bottom:0,
        paddingHorizontal:8,
        paddingVertical:4,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.white,
        borderTopRightRadius:10,
    },
    wrapperText:{
        paddingHorizontal:10,
        paddingVertical:10,
    },
    title:{
        fontSize:13,
        color:Colors.black,
        fontWeight:'bold'
    },
    description:{
        fontSize:11,
        color:Colors.unBlue,
    }
});

export { styles };