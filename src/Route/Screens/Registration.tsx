import { Alert, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export default function Registration({ navigation }) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Name, setName] = useState('');

    async function Registar() {
        // if (Name.length == 0) {
        //     Alert.alert("Enter your name")
        // }
        // else 
        if (Email.length == 0 && Password.length == 0 && Name.length == 0 && Mobile.length < 10 && ConfirmPassword.length < 1) {
            Alert.alert("Please fill all the Details")
        }
        else if (Name.length > 25 && Name.length == 0) {
            Alert.alert("Shorter you name")
        }
        else if (Mobile.length == 0 && Mobile.length > 10 && Mobile.length < 10) {
            Alert.alert("Enter your correct Mobile Number")
        } else if (Email.length == 0) {
            Alert.alert("Enter your e-mail address")
        } else if (Password.length == 0 && Password.length > 8) {
            Alert.alert("Enter password or password not greater than 8 digit")
        } else if (ConfirmPassword !== Password) {
            Alert.alert("Enter correct password")
        } else {
            navigation.navigate("Login")
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 1 }}>

                <Card.Content>
                    <Text style={{ alignSelf: "center", marginTop: 60, fontSize: 25 }}>Registration</Text>

                    <TextInput style={{ marginTop: 40 }} placeholder='Name'
                        value={Name} onChangeText={(val) => setName(val)}
                    ></TextInput>

                    <TextInput style={{ marginTop: 20 }} placeholder='E-mail'
                        value={Email} onChangeText={(val) => setEmail(val)}
                    ></TextInput>

                    <TextInput style={{ marginTop: 20 }} placeholder='Mobile Number'
                        value={Mobile} onChangeText={(val) => setMobile(val)}
                    ></TextInput>

                    <TextInput style={{ marginTop: 20 }} placeholder='Password'
                        value={Password} onChangeText={(val) => setPassword(val)}
                    ></TextInput>

                    <TextInput style={{ marginTop: 20 }} placeholder='Confirm Password'
                        value={ConfirmPassword} onChangeText={(val) => setConfirmPassword(val)}
                    ></TextInput>

                    <TouchableOpacity style={{ marginTop: 30 }}
                        onPress={() => navigation.navigate('Condition')}
                    >
                        <Text>
                            Agree Terms & Condition
                        </Text>
                    </TouchableOpacity>


                    <View style={{ marginTop: 40, backgroundColor: "#6495ED", marginHorizontal: 100, borderRadius: 15 }}>
                        <Button
                            mode={"contained"}
                            onPress={Registar}>
                            Register
                        </Button>
                    </View>

                </Card.Content>

            </Card>
        </View>
    )
}