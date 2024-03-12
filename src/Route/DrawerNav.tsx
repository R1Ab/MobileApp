import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import ForgetPassword from './Screens/ForgetPassword';
import EditProfile from './Screens/EditProfile';
import ChangePassword from './Screens/ChangePassword';
import Home2 from './Screens/Home2';
import BottomNav from './BottomNav';

export default function DrawerNav() {

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName='BottomNav'
            screenOptions={{ headerShown: false }}>

            <Drawer.Screen name='BottomNav' component={BottomNav} />
            <Drawer.Screen
                name="Home" component={Home}
            />

            <Drawer.Screen name="Forget" component={ForgetPassword} />
            <Drawer.Screen name='EditProfile' component={EditProfile} />
            <Drawer.Screen name='ChangePassword' component={ChangePassword} />
            <Drawer.Screen name='Home2' component={Home2} />

        </Drawer.Navigator>




    )
}