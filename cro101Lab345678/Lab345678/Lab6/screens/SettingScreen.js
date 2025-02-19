import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙ Settings</Text>
      <Text style={styles.text}>Adjust your preferences here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
  },
});

export default SettingScreen;
