import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../components/ThemeContext"; // Ensure you are using the correct path

export default function DrawerMenu(props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Icon name="menu" size={30} color="#fff" />
        <Text style={styles.headerText}>My App</Text>
      </View>

      <View style={styles.menuItems}>
        <DrawerItemList {...props} />

        <TouchableOpacity style={styles.darkModeButton} onPress={toggleTheme}>
          <Icon name={theme === "dark" ? "moon" : "sunny"} size={24} color="#fff" />
          <Text style={styles.menuText}>Dark Mode</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#447AC4",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  menuItems: {
    marginTop: 20,
  },
  darkModeButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});
