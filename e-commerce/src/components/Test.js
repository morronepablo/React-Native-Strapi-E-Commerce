import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-paper";

export default function Test() {
    return (
        <View>
            <Text>Estamos en Test Component</Text>
            <Button onPress={() => console.log("hola")} mode="contained">ClickMe</Button>
        </View>
    );
}
