import { View } from 'react-native'
import React from 'react'
import { Button, Card, Text, TextInput } from 'react-native-paper'

export default function ForgetPassword() {
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ flex: 1 }}>
                <Card.Content>
                    <Text style={{ alignSelf: "center", fontSize: 25, marginTop: 80 }}>
                        Forget Password
                    </Text>

                    <TextInput style={{ marginTop: 80 }}
                        placeholder='Enter your e-mail id'
                    />

                    <View style={{ marginTop: 40, flexDirection: "row", justifyContent: "space-between" }}>
                        <Button>
                            Cancel
                        </Button>

                        <Button>
                            Submit
                        </Button>
                    </View>





                </Card.Content>

            </Card>
        </View>
    )
}