import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerItem: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },

  containerImage: {
    marginBottom: 8,
    position: "relative",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },

  newBadge: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    color: "white",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  containerContent: {
    flexDirection: "column",
    gap: 10,
  },

  containerPrice: {
    flexDirection: "row",
    gap: 10,
  },

  newPrice: {
    color: "green",
    marginRight: 10,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  description: {
    color: "#666",
    fontSize: 14,
    marginBottom: 8,
  },

  buyButton: {
    borderRadius: 5,
  },

  likeIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    left: 130,
    top: -40,
  },

  buySection: {
    flexDirection: "row",
    position: "end",
  },

  buyIcon: {
    width: 20,
    height: 20,
  },
});
