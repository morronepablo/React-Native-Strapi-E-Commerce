import React, { useState, useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import AuthSreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, []);

  const authData = useMemo(
    () => ({
      auth,
      login: () => null,
      logout: () => null,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? <Text>Zona de usuarios</Text> : <AuthSreen />}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

