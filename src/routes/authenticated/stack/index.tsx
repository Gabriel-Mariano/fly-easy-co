import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@src/components/Header';
import { HomeScreen } from '@src/views/authenticated/home';
import { Colors } from '@src/themes';
import { StatusBar } from 'react-native';

type RootStackParam = {
    Home:undefined,
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParam>();

function AuthenticatedRoutes() {
   
    return (
        <>
        <StatusBar translucent barStyle={'light-content'} backgroundColor={Colors.primary} />
        <Navigator>
            <Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    header:()=> <Header />
                }}
            />
        </Navigator>
        </>
    )
}

export default AuthenticatedRoutes;