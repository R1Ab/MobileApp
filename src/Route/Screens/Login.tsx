import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-paper/lib/typescript/components/Icon'
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function Login({ navigation }) {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const name = await AsyncStorage.getItem("UserInfo");
        const password = await AsyncStorage.getItem("UserPass")
        const code = await AsyncStorage.multiGet(["UserInfo", "UserPass"])
        console.log("name", name);
        console.log("password", password);
        // console.log(AsyncStorage.getItem("UserPass"));
    }



    async function onLogin() {
        if (Username.length == 0 && Password.length == 0) {
            Alert.alert("Please enter Username & Password")
        } else if (Username.length == 0) { Alert.alert("Please enter Username") }
        else if (Password.length == 0) { Alert.alert("Please enter your password") }
        else if (Username === Password) {
            // console.log("username", Username);
            // console.log("password", Password);
            await AsyncStorage.setItem("UserInfo", Username);
            await AsyncStorage.setItem("UserPass", Password);
            navigation.navigate('Drawer');
        }
        else {
            Alert.alert("Password is wrong")
        }
    }

    return (


        <View style={{ flex: 1 }}>
            <Card style={{ flex: 1 }}>
                <Card.Content style={{}} >
                    <Text style={{ alignSelf: "center", marginTop: 80, fontSize: 25 }}>Welcome to Login</Text>

                    <TextInput style={{ marginTop: 70 }}
                        value={Username}
                        onChangeText={(val) => setUsername(val)}
                        placeholder='Username' />

                    <TextInput style={{ marginTop: 30 }}
                        value={Password}
                        onChangeText={(val) => setPassword(val)}
                        placeholder='Password' />
                    <Button style={{ marginTop: 30 }}
                        mode={"contained"}
                        onPress={onLogin}


                    // onPress={(onLogin) => Alert.alert('Login Succesfully', 'Welcome to app', [{
                    //     text: 'ok',
                    //     onPress: () => navigation.navigate('Home')
                    // },
                    // {
                    //     text: 'cancel',

                    // }

                    // ])}>
                    > Login
                    </Button>

                    <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                        <Text style={{ alignSelf: "flex-end", color: "blue", marginTop: 30 }}>
                            Forget Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                        <Text style={{ alignSelf: "center", color: "blue", marginTop: 250 }}>
                            New User? Sign up?
                        </Text>
                    </TouchableOpacity>


                </Card.Content>
            </Card>


        </View >
    )
}

