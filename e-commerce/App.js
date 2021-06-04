import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import jwtDecode from "jwt-decode";
import AuthSreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi, getTokenApi, removeTokenApi } from "./src/api/token";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if(token) {
        setAuth({
          token,
          idUser: jwtDecode(token).id
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = () => {
    if(auth) {
      removeTokenApi();
      setAuth(null);
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Zona de usuarios</Text>
            <Button title="Cerrar sesión" onPress={authData.logout} />
          </View>
        ) : (
          <AuthSreen />
        )}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

