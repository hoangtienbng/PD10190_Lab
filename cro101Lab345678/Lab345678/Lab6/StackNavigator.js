import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Lab6/screens/HomeScreen";
import DetailScreen from "../Lab6/screens/DetailScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
