import { createStackNavigator } from "@react-navigation/stack";
import PizzaDetailScreen from "../PizzaDetailScreen/PizzaDetailScreen";
import PizzaList from "../PizzaList/PizzaList";
import FavoritesScreen from "../FavoritesScreen/FavoritesScreen";

const MenuStack = createStackNavigator();

const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="PizzaList"
        component={PizzaList}
        options={{ title: "Menu", headerShown: false }}
      />
      <MenuStack.Screen
        name="PizzaDetailScreen"
        component={PizzaDetailScreen}
        options={{ title: "Pizza Details" }}
      />
      <MenuStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
    </MenuStack.Navigator>
  );
};

export default MenuStackScreen;
