import React, { useState, useCallback } from 'react';
import { ScrollView, Text } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import { getMeApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import colors from "../../styles/colors";

export default function Account() {
    const [user, setUser] = useState(null);
    const { auth } = useAuth();


    useFocusEffect(
        useCallback(() => {
            (async () => {
                const response = await getMeApi(auth.token);
                setUser(response);
            })();
        }, [])
    );
  
    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
            {!user ? (
                <ScreenLoading size="large" />
            ) : (
                <>
                    <Search />
                    <ScrollView>
                        <Text>Estamos en MI CUENTA</Text>  
                    </ScrollView>
                </>
            )}
        </>
    );
}
