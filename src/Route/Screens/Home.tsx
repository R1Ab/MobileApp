import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import BottomNav from '../BottomNav'
import AsyncStorage from '@react-native-async-storage/async-storage'
const post = [{
    name: "Abdur",
    mobile: 9315067364,
    address: "Okhla"
}, {
    name: "Raja",
    mobile: 9212183513,
    address: "ab"
}, {
    name: "sonu",
    mobile: 9711643845,
    address: "c"
}, {
    name: "Ibrahim",
    mobile: 8377988334,
    address: "d"
}, {
    name: "Aadil",
    mobile: 9315067354,
    address: "e"
}, {
    name: "Yousuf",
    mobile: 9711649251,
    address: "f"
}, {
    name: "Maryam",
    mobile: 9315067314,
    address: "g"
}, {
    name: "Aaquib",
    mobile: 9315067664,
    address: "h"
}, {
    name: "Zainab",
    mobile: 9315007364,
    address: "i"
}
]

export default function Home({ navigation }) {
    async function LogOut() {
        AsyncStorage.removeItem("UserInfo");
        AsyncStorage.removeItem("UserPass");
        navigation.navigate("Login");
    }
    return (
        // AsyncStorage.removeItem("UserInfo").then
        // navigation.navigate("Login")
        <ScrollView>

            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ alignSelf: "flex-start", marginTop: 40, fontSize: 25, fontWeight: "bold" }}
                    >Whatsapp</Text>

                    <Button style={{ marginTop: 40 }}
                        mode={"contained"}
                        // onPress={() => navigation.goBack()}
                        onPress={LogOut}
                    >
                        LogOut
                    </Button>
                </View>


                {post.map((item) => {
                    return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                            <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                                <Text>{item.mobile}</Text>
                                <Text>{item.address}</Text>

                            </View>
                            <Image style={{ height: 45, width: 45, marginTop: 20 }}
                                source={{ uri: "https://cdn.pixabay.com/photo/2014/04/02/10/20/anchor-303515_1280.png" }}
                            />
                        </View>
                    )
                }

                )
                }


            </View>
        </ScrollView>
    )
}