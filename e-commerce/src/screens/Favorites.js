import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FAVORITES() {
    return (
        <View style={styles.container}>
            <Text>Estamos en la FAVORITES</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
