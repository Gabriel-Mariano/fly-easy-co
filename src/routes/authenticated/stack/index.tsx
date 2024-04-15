import * as React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header } from '@src/components/Header';
import { HomeScreen } from '@src/views/authenticated/home';
import { ITicketListScreenProps, TicketListScreen } from '@src/views/authenticated/tickets/list';
import { Colors } from '@src/themes';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from '@src/components/Text';
import { Icon, VectorIcon } from '@src/components/Icons';
import { Avatar } from '@src/components/Avatar';
import { RouteProp } from '@react-navigation/native';

export type RootStackParam = {
    Home:undefined,
    TicketList:ITicketListScreenProps,
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParam>();

function AuthenticatedRoutes() {
    
    return (
        <>
        <SafeAreaView style={{ backgroundColor:Colors.primary}}/>
        <StatusBar translucent barStyle={'light-content'} backgroundColor={Colors.primary} />
        <Navigator screenOptions={{
            headerBackTitleVisible:false,
            headerStyle:{
                backgroundColor:Colors.primary
            },
            headerTintColor:Colors.white
        }}>
            <Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerLeft:()=> ( 
                        <View style={{ marginLeft:10, }}>
                            <Avatar />
                        </View>
                    ),
                    headerRight:()=> (
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            gap:10,
                            marginRight:10
                        }}>
                            <VectorIcon 
                                type={Icon.Ionicons} 
                                name="notifications" 
                                color={Colors.white}
                                size={24}
                            />
                            <VectorIcon 
                                type={Icon.Ionicons} 
                                name="settings" 
                                color={Colors.white}
                                size={24}
                            />
                        </View>
                    ),
                    headerTitle:()=> <Text style={{ color:Colors.white}}>FlyEasy</Text>,
                    headerStyle:{ backgroundColor:Colors.primary },
                    headerShadowVisible:false,
                    headerTitleAlign: 'center',
                }}
               
            />
            <Screen name='TicketList' component={TicketListScreen}
                 options={{ 
                    title:"PASSAGENS AÉREAS"
                }}
            />
        </Navigator>
        </>
    )
}

export default AuthenticatedRoutes;