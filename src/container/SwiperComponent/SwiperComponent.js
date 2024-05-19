import { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Pizza1 from "../../../assets/Pizza1.jpg";
import Pizza2 from "../../../assets/Pizza2.jpg";
import Pizza3 from "../../../assets/Pizza3.jpg";

const windowWidth = Dimensions.get("window").width;

const imageData = [
  { id: "1", imageUrl: Pizza1 },
  { id: "2", imageUrl: Pizza2 },
  { id: "3", imageUrl: Pizza3 },
];

const SwiperComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex =
        currentIndex === imageData.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.imageUrl} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imageData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={(e) => {
          const newIdx = Math.round(
            e.nativeEvent.contentOffset.x / windowWidth
          );
          setCurrentIndex(newIdx);
        }}
      />
      <View style={styles.indicatorContainer}>
        {imageData.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : {},
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: windowWidth,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "blue",
  },
});

export default SwiperComponent;
