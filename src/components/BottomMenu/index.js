import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Pages
import Home from "../../pages/Home";
import Likes from "../../pages/Likes";
import Photos from "../../pages/Photos";

const Tab = createBottomTabNavigator();

export default function BottomMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Likes") iconName = "heart-outline";
          else if (route.name === "Photos") iconName = "images-outline";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#447AC4",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Likes" component={Likes} />
      <Tab.Screen name="Photos" component={Photos} />
    </Tab.Navigator>
  );
}
