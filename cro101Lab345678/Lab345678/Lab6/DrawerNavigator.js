import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import ProfileScreen from "../Lab6/ProfileScreen";
import ChatScreen from "../Lab6/screens/ChatScreen"; // Màn hình Chat
import SettingScreen from "../Lab6/screens/SettingScreen"; // Màn hình Cài đặt
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4A90E2",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          },
          headerTintColor: "#fff",
          drawerStyle: {
            backgroundColor: "#f4f4f4",
            width: 260,
          },
          drawerActiveBackgroundColor: "#4A90E2",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          drawerItemStyle: {
            marginVertical: 6,
            borderRadius: 10,
          },
        }}
      >
        {/* Home Screen */}
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Profile Screen */}
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Chat Screen */}
        <Drawer.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Setting Screen */}
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: "⚙ Setting",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
