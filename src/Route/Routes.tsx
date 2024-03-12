import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Registration from './Screens/Registration';
import Login from './Screens/Login';
import Conditions from './Screens/Conditions';
import ForgetPassword from './Screens/ForgetPassword';
import BottomNav from './BottomNav';
import DrawerNav from './DrawerNav';
import Home2 from './Screens/Home2';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Drawer'>

                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='Condition' component={Conditions} />
                <Stack.Screen name='Forget' component={ForgetPassword} />
                <Stack.Screen name='BottomNav' component={BottomNav} />
                <Stack.Screen name='Drawer' component={DrawerNav} />
                <Stack.Screen name='Home2' component={Home2} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}