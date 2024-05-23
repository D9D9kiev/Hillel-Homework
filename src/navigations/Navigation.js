import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
import BasketScreen from "../screens/Basket";
import DetailItemScreen from "../screens/DetailItem";
import ModalScreen from "../screens/Modal";
import HomeIconSVG from "./HomeIcon";
import SettingsIconSVG from "./SettingsIcon";
import BasketIconSVG from "./BasketIcon";
import orderStore from "../store/Order";
import { observer } from "mobx-react";

const ICON_SIZE = 28; // TODO - get from appState
export function ScreensStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailItemScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const TabIconHome = (props) => {
  return (
    <HomeIconSVG
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill={props.focused ? "#333" : "#ccc"}
    />
  );
};

const TabIconSettings = (props) => {
  return (
    <SettingsIconSVG
      width={ICON_SIZE}
      height={ICON_SIZE}
      fill={props.focused ? "#333" : "#ccc"}
    />
  );
};

const TabIconBasket = (props) => {
  return (
    <View>
      <BasketIconSVG
        width={ICON_SIZE}
        height={ICON_SIZE}
        stroke={props.focused ? "#333" : "#ccc"}
      />
    </View>
  );
};

const BottomTabsStack = observer(() => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={ScreensStack}
        options={{ headerShown: false, tabBarIcon: TabIconHome }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false, tabBarIcon: TabIconSettings }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          headerShown: false,
          tabBarIcon: TabIconBasket,
          tabBarBadge: orderStore.orders.length,
        }}
      />
    </Tab.Navigator>
  );
});

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabsStack />
    </NavigationContainer>
  );
};

export default observer(Navigation);

const styles = StyleSheet.create({
  iconBasketWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "blue",
    position: "relative",
    borderRadius: "50%",
    overflow: "hidden",

    maxWidth: 128,
    position: "absolute",
    top: -ICON_SIZE / 2,
    right: -ICON_SIZE / 2,

    borderWidth: 1,
    borderColor: orderStore.orders.length > 0 ? "darkred" : "#777",
    backgroundColor: orderStore.orders.length > 0 ? "red" : "#ccc",
  },
  iconBasketCounter: {
    minWidth: ICON_SIZE,
    minHeight: ICON_SIZE,
    lineHeight: ICON_SIZE,
    color: orderStore.orders.length > 0 ? "white" : "#333",
    fontSize: ICON_SIZE * 0.65,
    textAlign: "center",

    zIndex: 5,
  },
});
