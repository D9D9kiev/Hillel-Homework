import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuStackScreen from "../Navigation/MenuStackScreen";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Menu") {
              iconName = focused ? "restaurant" : "restaurant-outline";
            } else if (route.name === "Slider") {
              iconName = focused ? "images" : "images-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Menu" component={MenuStackScreen} />
        <Tab.Screen name="Slider" component={SwiperComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
