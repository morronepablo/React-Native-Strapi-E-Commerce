import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Account from "../screens/Account";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="home"
                    component={Home}
                    options={{
                        title: "Inicio",
                    }}
                />
                <Tab.Screen 
                    name="favorites"
                    component={Favorites}
                    options={{
                        title: "Favoritos",
                    }}
                />
                <Tab.Screen 
                    name="cart"
                    component={Cart}
                    options={{
                        title: "Carrito",
                    }}
                />
                <Tab.Screen 
                    name="account"
                    component={Account}
                    options={{
                        title: "Mi cuenta",
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
