import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Splash({ navigation }) {



    useEffect(() => {
        setTimeout(async () => {
            const person = await AsyncStorage.getItem("UserInfo");
            const code = await AsyncStorage.getItem("UserPass")
            if (person !== null && code !== null) {
                navigation.replace("Drawer")
            }
            else {
                navigation.replace("Login")
            }

        }, 3000)
    }, []);


    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 1 }}>
                <Card.Cover
                    style={{ height: 100, width: 100, borderRadius: 15, alignSelf: "center", marginTop: 200 }}
                    source={{ uri: "https://cdn.pixabay.com/photo/2014/03/25/16/28/anchor-297206_1280.png" }} />

                <Card.Content>
                    <Text style={{ alignSelf: "center", fontSize: 25, fontStyle: "italic", marginTop: 20, fontWeight: "bold" }} >
                        Welcome to App
                    </Text>
                </Card.Content>
            </Card>
        </View>

    );
}