import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

const DetailScreen = ({ route, navigation }) => {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DETAIL</Text>
      <Text style={styles.text}>
        Hello {userName || "user"} , this is the detail screen!
      </Text>

      {/* Nút 1: Quay lại bằng goBack */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>⬅GO BACK</Text>
      </TouchableOpacity>

      {/* Nút 2: Reset navigation stack */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          )
        }
      >
        <Text style={styles.buttonText}>🔄 RESET</Text>
      </TouchableOpacity>

      {/* Nút 3: Pop 1 màn hình khỏi Stack */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Text style={styles.buttonText}>🔙 POP SCREEN</Text>
      </TouchableOpacity>

      {/* Nút 4: Trở về màn hình đầu tiên */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>🏠POPTOTOP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
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

export default DetailScreen;
