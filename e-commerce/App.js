import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import Test from "./src/components/Test";

export default function App() {

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Nuestra E-Commerce</Text>

        <Test />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
