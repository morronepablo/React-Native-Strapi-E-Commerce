import React from 'react';
import { ScrollView, Text } from 'react-native';
import StatusBar from "../components/StatusBar";
import Search from "../components/Search";
import colors from "../styles/colors";

export default function Account() {
    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
            <Search />
            <ScrollView>
                <Text>Estamos en MI CUENTA</Text>
            </ScrollView>
        </>
    );
}
