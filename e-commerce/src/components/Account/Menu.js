import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
    const navigation = useNavigation();

    return (
        <>
            <List.Section>
                <List.Subheader>Mi cuenta</List.Subheader>
                <List.Item 
                    title="Cambiar nombre"
                    description="Cambia el nombre de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="face" />}
                    onPress={() => console.log("Ir a cambiar elnombre")}
                />
                <List.Item 
                    title="Cambiar email"
                    description="Cambia el email de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="at" />}
                    onPress={() => console.log("Ir a cambiar el email")}
                />
                <List.Item 
                    title="Cambiar username"
                    description="Cambia el nombre de usuario de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="sim" />}
                    onPress={() => console.log("Ir a cambiar el username")}
                />
                <List.Item 
                    title="Cambiar contraseña"
                    description="Cambia la contraseña de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="key" />}
                    onPress={() => console.log("Ir a cambiar la contraseña")}
                />
                <List.Item 
                    title="Mis direcciones"
                    description="Administra tus direcciones de envío"
                    left={(props) => <List.Icon {...props} icon="map" />}
                    onPress={() => console.log("Ir a cambiar direcciones")}
                />
            </List.Section>
            <List.Section>
                <List.Subheader>App</List.Subheader>
                <List.Item 
                    title="Pedidos"
                    description="Listado de todos los pedidos"
                    left={(props) => <List.Icon {...props} icon="clipboard-list" />}
                    onPress={() => console.log("Ir a mis pedidos")}
                />
                <List.Item 
                    title="Lista de deseos"
                    description="Listado de todos los productos que te quieres comprar"
                    left={(props) => <List.Icon {...props} icon="heart" />}
                    onPress={() => navigation.navigate("favorites")}
                />
                <List.Item 
                    title="Cerrar sesión"
                    description="Cierra esta sesión e inicia con otra"
                    left={(props) => <List.Icon {...props} icon="logout" />}
                    onPress={() => console.log("Cerrar sesión")}
                />
            </List.Section>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
    },
    titleName: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
