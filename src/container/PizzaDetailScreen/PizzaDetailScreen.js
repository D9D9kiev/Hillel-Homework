import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const PizzaDetailScreen = ({ route }) => {
  const { pizza } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: pizza.image }} style={styles.image} />
      <Text style={styles.title}>{pizza.title}</Text>
      <Text style={styles.description}>{pizza.description}</Text>
      <Text style={styles.price}>New Price: {pizza.price.newPrice}</Text>
      <Text style={styles.oldPrice}>Old Price: {pizza.price.oldPrice}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginTop: 10,
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: "line-through",
    marginTop: 5,
  },
});

export default PizzaDetailScreen;
