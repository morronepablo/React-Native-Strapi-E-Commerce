import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { formStyle } from "../../styles";

export default function ChangeName() {
    return (
        <View style={styles.container}>
            <TextInput 
                label="Nombre"
                style={formStyle.input}
            />
            <TextInput 
                label="Apellidos"
                style={formStyle.input}
            />
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={() => console.log("Formulario enviado...")}
            >
                cambiar nombre y apellidos
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
