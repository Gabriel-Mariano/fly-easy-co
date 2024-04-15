import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:75,
        paddingHorizontal:15,
        backgroundColor:'white',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#E8E8E8',

        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        elevation:2
    },
    image:{
        width:60,
        height:160,
    },
    title:{
        fontFamily:'Nunito-Regular',
        fontWeight:'bold',
    },
    description:{
        fontFamily:'Nunito-Regular',
    },
    wrapperText:{
        marginLeft:8
    }

})

export { styles };