import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Guide from '../screens/Guide';
import Start from '../screens/Start';
import Loading from '../screens/Loading';
import QRcode from '../screens/QRcode';
import PopupAccumulatePoints from '../popups/PopupAccumulatePoints';
import PopupEndTime from '../popups/PopupEndTime';
import PopupThank from '../popups/PopupThank';


type RootStackParamList = {
    Home: undefined;
    Guide: undefined;
    Start: undefined;
    Loading: undefined;
    QRcode: undefined;
    PopupAccumulatePoints:{
     setHide:boolean;
    } | undefined;
    PopupEndTime:undefined;
    PopupThank:undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Guide" component={Guide} />
            <RootStack.Screen name="Start" component={Start} />
            <RootStack.Screen name="Loading" component={Loading} />
            <RootStack.Screen name="QRcode" component={QRcode} />
            <RootStack.Screen name="PopupAccumulatePoints" component={PopupAccumulatePoints} initialParams={{setHide:false}} />
            <RootStack.Screen name="PopupEndTime" component={PopupEndTime} />
            <RootStack.Screen name="PopupThank" component={PopupThank} /> 

        </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation