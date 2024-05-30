import { View, StyleSheet, Image } from "react-native";
import ImagePromotion from "./ImagePromotion";
import { colors } from "../../../common/colors/colors";

export default function ProductImage({ data, height = 150 }) {
  return (
    <View style={styles.imageWrapper}>
      <Image
        style={[styles.imagePromo, { height: height }]}
        source={data.image}
      />
      {data.isPromo && (
        <ImagePromotion color={data.promoColor} text={data.isPromo} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imagePromo: {
    resizeMode: "cover",
    width: "100%",
    height: 150,
    backgroundColor: colors["product-image-background"],
  },
});
