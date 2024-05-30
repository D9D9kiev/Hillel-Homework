import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "../common/colors/colors";

const screen = new Dimensions.get("window");

export default function LoaderScreen({ show }) {
  return (
    <View style={styles.container}>
      <Image
        width={screen.width}
        height={screen.height}
        style={styles.appScreenImage}
        source={require("../../assets/imgs/logo/logo-pizza-eater.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["app-screen-background"],
    zIndex: 5,
  },
  appScreenImage: {
    flex: 1,
    resizeMode: "center",
  },
});
