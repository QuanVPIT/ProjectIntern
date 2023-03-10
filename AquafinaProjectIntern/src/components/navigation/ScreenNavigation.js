import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Guide from '../screens/Guide';
import Home from '../screens/Home';
import Start from '../screens/Start';
import Loading from '../screens/Loading';
import QRcode from '../screens/QRcode';
import { Provider } from 'react-redux';
import store from '../../redux/store'
const Stack = createNativeStackNavigator();
const ScreenNavigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Guide" component={Guide} />
                    <Stack.Screen name="Start" component={Start} />
                    <Stack.Screen name="Loading" component={Loading} />
                    <Stack.Screen name="QRcode" component={QRcode} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
            

    )
}

export default ScreenNavigation