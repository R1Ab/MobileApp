import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ForgetPassword from './Screens/ForgetPassword'
import ChangePassword from './Screens/ChangePassword'
import EditProfile from './Screens/EditProfile'
import Conditions from './Screens/Conditions'
import Home from './Screens/Home'
import Home2 from './Screens/Home2'
import DrawerNav from './DrawerNav'

export default function BottomNav() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            initialRouteName='Home2'
        >
            <Tab.Screen name='Home'
                options={

                    { tabBarIcon: ({ }) => <MaterialCommunityIcons name={"home"} size={25} /> }}
                component={Home} />
            <Tab.Screen name='Forget'
                options={{ tabBarLabel: "Forget Password", tabBarIcon: ({ }) => <MaterialCommunityIcons name={"account-minus"} color={"lightblue"} size={25} /> }}
                component={ForgetPassword} />

            <Tab.Screen name='ChangePassword'
                options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name={"account-key"} color={"green"} size={25} /> }}
                component={ChangePassword} />

            <Tab.Screen name='Edit'
                options={{ tabBarLabel: "Edit Profile", tabBarIcon: ({ color }) => <MaterialCommunityIcons name={"account-edit"} color={"brown"} size={25} /> }}
                component={EditProfile} />

            <Tab.Screen name='Condition'
                options={{ tabBarLabel: "Terms & Condition", tabBarIcon: ({ color }) => <MaterialCommunityIcons name={"alert-circle-outline"} color={"blue"} size={25} /> }}
                component={Conditions} />
            <Tab.Screen name='Home2'
                options={{ tabBarLabel: "Home2", tabBarIcon: () => <MaterialCommunityIcons name="home-plus" size={25} /> }}
                component={Home2} />
            {/* <Tab.Screen name='Drawer' component={DrawerNav} /> */}

        </Tab.Navigator>
    )
}