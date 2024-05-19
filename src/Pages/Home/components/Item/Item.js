import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BuyIcon from "../../../../../assets/Buy.png";
import style from "./style";

const Item = ({ data, onPress, onFavoritePress }) => {
  const { title, isNew, image, price, description } = data;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoritePress = () => {
    const newFavoritedState = !isFavorited;
    setIsFavorited(newFavoritedState);
    if (onFavoritePress) {
      onFavoritePress({ ...data, isFavorited: newFavoritedState });
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={style.containerItem}>
      <View style={style.containerImage}>
        <Image source={{ uri: image }} style={style.image} />
        {isNew && <Text style={style.newBadge}>New</Text>}
      </View>
      <View style={style.containerContent}>
        <Text style={style.title}>{title}</Text>
        <TouchableOpacity onPress={handleFavoritePress} style={style.likeIcon}>
          <Ionicons
            name={isFavorited ? "heart" : "heart-outline"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <View style={style.containerPrice}>
          <Text style={style.newPrice}>{price.newPrice}</Text>
          <Text style={style.oldPrice}>{price.oldPrice}</Text>
        </View>
        <Text style={style.description}>{description}</Text>
      </View>

      <View style={style.buySection}>
        <Text style={style.buyButton}>Buy</Text>
        <Image source={BuyIcon} style={style.buyIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
