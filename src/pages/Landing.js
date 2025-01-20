import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Landing({ navigation }) {
  return (
    <LinearGradient
      colors={["#85AADF", "#C4B5E0", "#F795C7"]}
      style={styles.gradient}
    >
      <View style={styles.card}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>Personal</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DrawerMenu")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Adjusted transparency (60%)
    padding: 30,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    alignItems: "center",
    width: "80%",
    justifyContent: "center",
  },
  icon: {
    width: 70, // Adjust the icon size
    height: 70, // Adjust the icon size
    marginBottom: 10, // Space between icon and title
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    color: "#333333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#447AC4",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
