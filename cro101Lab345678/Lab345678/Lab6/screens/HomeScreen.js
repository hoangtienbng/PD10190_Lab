import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>Hello, this is the home screen!</Text>

      <TextInput
        style={styles.input}
        placeholder="Input your name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Detail", { userName: name })}
      >
        <Text style={styles.buttonText}>Move on to DetailScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 34, // Tăng kích thước chữ
    fontWeight: "900", // Đậm hơn
    marginBottom: 15,
    color: "#4A90E2",
    textTransform: "uppercase", // Chữ in hoa
    letterSpacing: 2, // Tạo khoảng cách giữa các chữ
    textShadowColor: "rgba(0, 0, 0, 0.3)", // Màu bóng đổ
    textShadowOffset: { width: 2, height: 2 }, // Độ lệch bóng
    textShadowRadius: 4, // Độ mờ của bóng
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    borderColor: "#4A90E2",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    paddingVertical: 14,
    borderRadius: 30, // Bo góc nhiều hơn
    backgroundColor: "#4A90E2",
    alignItems: "center",
    marginVertical: 8, // Khoảng cách giữa các nút
    borderWidth: 2, // Thêm viền
    borderColor: "#316AC5", // Màu viền đậm hơn một chút
    shadowColor: "#000", // Hiệu ứng bóng đổ
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Bóng đổ trên Android
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase", // Chữ in hoa
  },
});


export default HomeScreen;
