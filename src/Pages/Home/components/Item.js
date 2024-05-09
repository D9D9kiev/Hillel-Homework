import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import LikeIcon from "../../../../assets/Like.png";
import BuyIcon from "../../../../assets/Buy.png";
import style from "../style";

const Item = ({ data }) => {
  const { title, isNew, image, price, description } = data;
  return (
    <View style={style.containerItem}>
      <View style={style.containerImage}>
        <Image source={{ uri: image }} style={style.image} />
        {isNew && <Text style={style.newBadge}>New</Text>}
      </View>
      <View style={style.containerContent}>
        <Text style={style.title}>{title}</Text>
        <Image source={LikeIcon} style={style.likeIcon} />
        <View style={style.containerPrice}>
          <Text style={style.newPrice}>{price.newPrice}</Text>
          <Text style={style.oldPrice}>{price.oldPrice}</Text>
        </View>
        <Text style={style.description}>{description}</Text>
      </View>

      <TouchableOpacity>
        <View style={style.buySection}>
          <Text style={style.buyButton}>Buy</Text>
          <Image source={BuyIcon} style={style.buyIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
