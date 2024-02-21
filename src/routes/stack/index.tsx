import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../views/authenticated/home';
import { LoginScreen } from "../../views/auth/login";

type RootStackParam = {
    Login:undefined,
    Home:undefined,
}

const Stack = createNativeStackNavigator<RootStackParam>();

function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackRoutes;