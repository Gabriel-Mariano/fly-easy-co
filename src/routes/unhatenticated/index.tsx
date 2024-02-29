import * as React from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@src/views/auth/login";
import { Colors } from '@src/themes';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
        <>
        <StatusBar translucent barStyle={"dark-content"} backgroundColor={Colors.primary} />
        <Navigator>
            <Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        </Navigator>
        </>
    );
}

export default AuthRoutes;