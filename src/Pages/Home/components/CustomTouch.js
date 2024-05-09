import React from "react";
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
} from "react-native";

const CustomTouch = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={props.style}>
      <TouchableComponent onPress={props.onPress}>
        <View>{props.children}</View>
      </TouchableComponent>
    </View>
  );
};

export default CustomTouch;
