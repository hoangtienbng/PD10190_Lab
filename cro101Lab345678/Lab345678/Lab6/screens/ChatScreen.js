import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Chat Screen</Text>
      <Text style={styles.text}>This is where your messages will appear.</Text>
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

export default ChatScreen;
