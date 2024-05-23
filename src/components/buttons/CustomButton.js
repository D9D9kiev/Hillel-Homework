import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function CustomButtom({
  onPress = () => console.warn("Pressed"),
  children,
  btnTitle = "Press Me",
  icon = {},
  style = {},
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.buttonWrapper, style]}>
        {icon}
        {btnTitle}
      </View>
      {children}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});
