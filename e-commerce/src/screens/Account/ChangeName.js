import React, { useState, useCallback } from "react";
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { formStyle } from "../../styles";

export default function ChangeName() {
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
          (async () => {
            const response = await getMeApi(auth.token);
            if(response.name && response.lastname) {
                await formik.setFieldValue("name", response.name);
                await formik.setFieldValue("lastname", response.lastname);
            }
          })();
        }, [])
      );

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
