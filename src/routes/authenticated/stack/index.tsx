import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@src/views/authenticated/home';

type RootStackParam = {
    Home:undefined,
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParam>();

function AuthenticatedRoutes() {
    return (
        <Navigator>
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    )
}

export default AuthenticatedRoutes;