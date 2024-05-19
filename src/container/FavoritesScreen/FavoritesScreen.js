import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";
import Item from "../../Pages/Home/components/Item/Item";

const FavoritesScreen = ({ route }) => {
  const [favorites, setFavorites] = React.useState([]);

  useFocusEffect(
    useCallback(() => {
      const updatedFavorites = route.params?.favoritePizzas || [];
      setFavorites(updatedFavorites);
    }, [route.params?.favoritePizzas])
  );

  const renderItem = ({ item }) => {
    return <Item data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Favorite Pizzas</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  listContainer: {
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
  },
});

export default FavoritesScreen;
