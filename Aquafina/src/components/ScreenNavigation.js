import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Guide from './Guide';
import Start from './Start';
import PopupEndTime from './PopupEndTime';
const Stack = createNativeStackNavigator();
const ScreenNavigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Guide" component={Guide} />
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreenNavigation