import react from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export const ViewComponet = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.baseText}>
          Em vao doi bang
          <Text style={styles.textPage}>van ban 2</Text>
        </Text>
      </View>
    </ScrollView>
  );
};
export default ViewComponet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
  },
  baseText: {
    fontSize: 15,
    color: "red",
  },
  textPage: {
    fontWeight: "bold",
    color: "#333",
  },
});
