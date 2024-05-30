import { StyleSheet, View, TouchableOpacity } from "react-native";
import ProductImage from "../product/productImage/productImage";
import ProductDescriptions from "../product/productDescriptions";
import ProductHandlers from "../product/productHandlers";
import { colors } from "../../common/colors/colors";
import { useRef, useState, useCallback } from "react";

export default function ItemCard({ item, onPress }) {
  const [imageHeight, setImageHeinght] = useState(0);
  const layoutRef = useRef(null);

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setImageHeinght(height);
  };

  const { key } = item;

  return (
    <View
      ref={layoutRef}
      onLayout={onLayout}
      style={styles.cardWrapper}
      key={key}
    >
      <TouchableOpacity onPress={onPress} style={[styles.imageWrapper]}>
        <ProductImage data={item} height={imageHeight} />
      </TouchableOpacity>

      <ProductDescriptions data={item} />
      <ProductHandlers data={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    flexDirection: "row",
    flex: 7,
    width: "96%",
    margin: 10,
    backgroundColor: colors["card-background"],

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  imageWrapper: {
    flex: 2,
  },
});
