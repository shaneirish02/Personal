import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme, ThemeProvider } from "./src/components/ThemeContext";
import "react-native-gesture-handler";

// Pages
import Landing from "./src/pages/Landing";
import Home from "./src/pages/Home";
import AccountSettings from "./src/pages/AccountSettings";
import Likes from "./src/pages/Likes";
import Photos from "./src/pages/Photos";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomMenu() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.background },
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

function DrawerMenu() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme.background,
        },
        drawerActiveTintColor: "#447AC4",
        drawerInactiveTintColor: "gray",
        drawerLabelStyle: { color: theme.text },
      }}
    >
      <Drawer.Screen name="Home" component={BottomMenu} />
      <Drawer.Screen name="Account Settings">
        {() => <AccountSettings toggleTheme={toggleTheme} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
