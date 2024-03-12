import { Alert, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, TextInput, Button, Text } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';


let oldPassword;
export default function ChangePassword({ navigation }) {
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        oldPassword = await AsyncStorage.getItem("UserPass");
    }

    const [CurrentPassword, setCurrentpassword] = useState('');
    const [NewPassword, setNewpassword] = useState('');
    const [ConfirmPassword, setConfirmpassword] = useState('');
    async function Password() {

        if (CurrentPassword !== oldPassword) {
            Alert.alert("Password not matched with old password")
        }
        else if (NewPassword !== ConfirmPassword) {
            Alert.alert("Password does not match");
            await AsyncStorage.setItem("NewPass", NewPassword)
        }
        else {
            navigation.navigate("Home2")
        }
    }

    return (
        <View style={{ flex: 1 }}>

            <Card style={{ flex: 1 }}>

                <Text style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center", marginTop: 60 }}>Change Password</Text>

                <TextInput style={{ marginTop: 40, marginHorizontal: 15 }}
                    value={CurrentPassword}
                    onChangeText={(val) => setCurrentpassword(val)}
                    placeholder='Current Password'></TextInput>
                <TextInput style={{ marginTop: 20, marginHorizontal: 15 }}
                    value={NewPassword}
                    onChangeText={(val) => setNewpassword(val)}
                    placeholder='New Password'></TextInput>
                <TextInput style={{ marginTop: 20, marginHorizontal: 15 }}
                    value={ConfirmPassword}
                    onChangeText={(val) => setConfirmpassword(val)}
                    placeholder='Confirm Password'></TextInput>


                <View style={{ marginTop: 40, marginHorizontal: 60 }}>

                    <Button
                        mode="contained"
                        onPress={Password}>
                        Submit
                    </Button>
                </View>

            </Card>


        </View>
    )
}