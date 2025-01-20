import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AccountSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Setting</Text>
      <Button title="Change Theme" onPress={() => {}} color="#447AC4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 20,
    color: "#447AC4",
  },
});
