import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from "../../assets/logo.png";
import { layoutStyle } from "../styles";

export default function Auth() {
    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo} source={logo} />
            <Text>Auth Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 50,
        resizeMode: "contain",
        marginBottom: 20,
    },
});
