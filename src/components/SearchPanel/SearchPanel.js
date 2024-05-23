import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Animated, {
  withSpring,
  StretchInX,
  StretchOutX,
  ZoomIn,
  ZoomOut,
  Easing,
  Keyframe,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { colors } from "../../common/colors/colors";
import ClearSVG from "./ClearIcon";
import SearchSVG from "./SearchIcon";
import { useState } from "react";

/**
 *  TODO - move to appState search text
 */
let DURATION = 350;
export default function SearchPanel({ onSearch, onFreezeUpdate }) {
  const [searchText, setSearchText] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onTextChange = (e) => {
    onSearch(e);
    setSearchText(e);
  };

  const onClearSearch = () => {
    onSearch("");
    setSearchText("");
  };

  const onCollapse = () => {
    setIsCollapsed((prev) => {
      if (!prev) {
        setTimeout(() => {
          onFreezeUpdate((prev) => !prev);
          onSearch("");
          setSearchText("");
        }, DURATION * 5);
      }
      return !prev;
    });
  };

  return (
    <View style={styles.wrapperSearchPanel}>
      {!isCollapsed && (
        <Animated.View
          style={styles.searchInputWrapper}
          entering={StretchInX.duration(DURATION).easing(Easing.ease)}
          exiting={StretchOutX.duration(DURATION).easing(Easing.ease)}
        >
          <Pressable style={styles.clearIconWrapper} onPress={onClearSearch}>
            <ClearSVG
              style={[styles.svgIcon]}
              width="24"
              height="24"
              stroke={colors["primary-dark-alpha"]}
            />
          </Pressable>

          <TextInput
            style={styles.text}
            placeholder="Enter text for search:"
            onChangeText={onTextChange}
            maxLength={100}
            multiline={true}
            numberOfLines={3}
            value={searchText}
          />
        </Animated.View>
      )}

      <Pressable
        style={({ pressed }) => [
          styles.wrapperSearchIconCollapsed,
          {
            backgroundColor: pressed
              ? colors["primary-light-pressed"]
              : colors["primary-light"],
            zIindex: isCollapsed ? 1 : 10,
          },
        ]}
      >
        <Pressable onPress={onCollapse} style={styles.seachIconWrapper}>
          <Image
            source={require("../../../assets/imgs/icons/search.png")}
            style={styles.pngIcon}
          />
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperSearchPanel: {
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  wrapperSearchIconCollapsed: {
    borderRadius: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    width: 40,
  },
  searchInputWrapper: {
    flex: 1,
    height: 40,
    width: "90%",
    overflow: "hidden",
    marginRight: 5,
    flexDirection: "row",
    backgroundColor: colors["primary-light"],
  },
  seachIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVerticalas: 10,
    paddingRight: 10,
  },
  pngIcon: {
    width: 24,
    height: 24,
  },
  clearIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVerticalas: 10,
  },
  svgIcon: {
    fill: colors["primary-light"],
  },
  text: {
    color: colors["primary-dark-alpha"],
    fontSize: 20,
    maxHeight: 90,
    textAlign: "left",
    width: "auto",
    flex: 1,
  },
});
