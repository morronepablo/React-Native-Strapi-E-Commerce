import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import StatusBar from "../../components/StatusBar";
import { updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";
import { formStyle } from "../../styles";


export default function ChangePassword() {
    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
            <View style={styles.container}>
                <RootSiblingParent>
                    <TextInput
                    label="Nueva contraseña"
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                    secureTextEntry
                    value={formik.values.password}
                    error={formik.errors.password}
                    />
                    <TextInput
                    label="Repetir nueva contraseña"
                    style={formStyle.input}
                    onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                    secureTextEntry
                    value={formik.values.repeatPassword}
                    error={formik.errors.repeatPassword}
                    />
                    <Button
                    mode="contained"
                    style={formStyle.btnSucces}
                    onPress={formik.handleSubmit}
                    loading={loading}
                    >
                    Cambiar contraseña
                    </Button>
                </RootSiblingParent>
            </View>
        </>
    );
}

var styles = StyleSheet.create({
    container: {
      padding: 20,
    },
  });
