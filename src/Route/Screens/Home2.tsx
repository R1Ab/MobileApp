import { View, FlatList, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Button, Card, } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const person = [{
    name: "Abdur",
    Mobile: 9315067364,
    addrees: "Okhla",
    image: require('../Asset/Image/Ak.jpg')

}, {
    name: "Abdur Rehman",
    Mobile: 9315067365,
    addrees: "a",
    image: require('../Asset/Image/Yousuf.jpg')
}, {
    name: "Raja",
    Mobile: 9212183513,
    addrees: "b",
    image: require('../Asset/Image/Ak.jpg')
}, {
    name: "Sonu",
    Mobile: 9315067363,
    addrees: "c",
    image: require('../Asset/Image/Yousuf.jpg')
}, {
    name: "Ibrahim",
    Mobile: 8377988334,
    addrees: "d",
    image: require('../Asset/Image/Ak.jpg')
}, {
    name: "Aaquib",
    Mobile: 9315067366,
    addrees: "e",
    image: require('../Asset/Image/Yousuf.jpg')
}, {
    name: "Aadil",
    Mobile: 9315067368,
    addrees: "f",
    image: require('../Asset/Image/Ak.jpg')
}, {
    name: "Yousuf",
    Mobile: 9315067369,
    addrees: "g",
    image: require('../Asset/Image/Yousuf.jpg')
}, {
    name: "Maryam",
    Mobile: 9315067164,
    addrees: "h",
    image: require('../Asset/Image/Ak.jpg')
}]

const Item = () => (
    <View style={style.title}>
        <Text style={style.text}>

        </Text>
    </View>
);

// function BottomNav() {
const Tab = createBottomTabNavigator();
// return (

// )
// };



export default function Home2({ navigation }) {
    async function Logout() {
        AsyncStorage.removeItem("UserInfo");
        AsyncStorage.removeItem("UserPass");
        navigation.navigate("Login")
    }

    return (

        <SafeAreaView style={style.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }} >

                <Text style={{ fontSize: 22, marginHorizontal: 10, marginVertical: 10 }}>
                    Whatsapp
                </Text>
                <View >
                    <Text style={{ fontSize: 12, backgroundColor: "red" }}>
                        <Button onPress={Logout}
                            title='Logout'
                        />
                    </Text>
                </View>

            </View>

            <FlatList
                data={person}
                ItemSeparatorComponent={<View style={{ marginTop: 5 }} />}
                contentContainerStyle={{ padding: 5 }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#CCCCFF" }}>
                            <View style={{ padding: 20, marginHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold" }}> {item.name} </Text>
                                <Text>{item.Mobile}</Text>
                                <Text>{item.addrees}</Text>
                            </View>
                            <Image
                                style={{ height: 60, width: 60, marginTop: 20, marginHorizontal: 10, borderRadius: 30 }}
                                source={item.image} />
                            {/* <Image style={{ height: 60, width: 60, marginTop: 20, marginHorizontal: 10, borderRadius: 30 }}
                                source={require("../Asset/Image/Yousuf.jpg")} /> */}

                        </View>
                    )
                }
                }
            />

            {/* { 
            {<Tab.Navigator>
                <Tab.Screen
                    name='Home2' component={Home2}
                />
            </Tab.Navigator> } } */}
        </SafeAreaView >

    )
}
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {

        backgroundColor: "#82CAFF",
        padding: 20,
        marginHorizontal: 15,
        marginTop: 20

    },
    text: {
        fontSize: 20
    }
})