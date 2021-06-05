import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";

export default function ChangeName() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log("Formulario enviado...");
            console.log(formData);
        }
    });

    return (
        <View style={styles.container}>
            <TextInput
                label="Nombre"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("name", text)}
                value={formik.values.name}
                error={formik.errors.name}
            />
            <TextInput 
                label="Apellidos"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("lastname", text)}
                value={formik.values.lastname}
                error={formik.errors.lastname}
            />
            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}
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

function initialValues() {
    return {
      name: "",
      lastname: "",
    };
}
  
function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
    };
}
