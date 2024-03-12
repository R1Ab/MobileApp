import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'

export default function EditProfile({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <Card style={{ flex: 1 }}>
                <Text style={{ alignSelf: "center", marginTop: 80, fontSize: 25, fontWeight: "bold" }}>Edit Profile</Text>



                <TextInput style={{ marginTop: 40, marginHorizontal: 15 }} placeholder='Name'></TextInput>
                <TextInput style={{ marginTop: 20, marginHorizontal: 15 }} placeholder='E-mail'></TextInput>
                <TextInput style={{ marginTop: 20, marginHorizontal: 15 }} placeholder='Mobile Number'></TextInput>


                <View style={{ marginTop: 40, marginHorizontal: 60 }}>

                    <Button
                        mode="contained"
                        onPress={navigation.navigate("Home2")}>
                        Submit
                    </Button>
                </View>

            </Card>

        </View>
    )
}