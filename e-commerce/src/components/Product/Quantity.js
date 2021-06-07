import React from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Quantity() {

  return (
    <DropDownPicker
      items={[
        {
          label: "1",
          value: 1,
        },
        {
          label: "2",
          value: 2,
        },
        {
          label: "3",
          value: 3,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({

});