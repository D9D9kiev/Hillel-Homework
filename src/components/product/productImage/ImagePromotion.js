import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../common/colors/colors";

export default function ImagePromotion({ text = "New", color = "#f47018ff" }) {
  const useStyle = StyleSheet.create({
    props: {
      backgroundColor: color,
    },
  });

  return (
    <View
      style={[
        styles.wrapper,
        useStyle.props,
        {
          transform: [{ rotate: "-45deg" }],
        },
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 10,
    left: -35,
    backgroundColor: colors["promotion-new"],
    width: 120,
    padding: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  text: {
    color: colors["promotion-text"],
    fontSize: 16,
    textAlign: "center",
  },
});
