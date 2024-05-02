import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Item from "./src/Pages/Home/components/Item";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Item />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
});
