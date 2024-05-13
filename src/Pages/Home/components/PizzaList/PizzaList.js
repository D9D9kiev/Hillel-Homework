import React, { useState, useCallback } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Modal,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Item from "../Item";
import CustomTouch from "../CustomTouch";
import styles from "./style";
import itemData from "../../../../db/db.json";
import CustomCheckbox from "../CustomCheckbox";

const newItem = {
  id: "new",
  title: "Special New Pizza",
  isNew: true,
  image:
    "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
  price: {
    newPrice: "$10.99",
    oldPrice: "$12.99",
  },
  description: "A delicious ...",
};

const additionalItems = [
  {
    id: "additional1",
    title: "Extra Pizza 1",
    isNew: false,
    image:
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    price: { newPrice: "$8.99", oldPrice: "$10.99" },
    description: "A delicious ...",
  },
  {
    id: "additional2",
    title: "Extra Pizza 2",
    isNew: false,
    image:
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    price: { newPrice: "$9.99", oldPrice: "$11.99" },
    description: "A delicious ...",
  },
];

const PizzaList = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [isNewFilter, setIsNewFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(itemData.mockItemData);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const applySearchAndFilter = (text, isNew) => {
    let filtered = itemData.mockItemData.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) &&
        (isNew ? item.isNew === isNew : true)
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => {
    return <Item data={item} />;
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setFilteredData((currentData) => [newItem, ...currentData]);
      setRefreshing(false);
    }, 3000);
  }, []);

  const loadMoreItems = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      setFilteredData((currentData) => [...currentData, ...additionalItems]);
      setLoadingMore(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomTouch
          onPress={() => setModalVisible(true)}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Filter</Text>
        </CustomTouch>
        <CustomTouch
          onPress={() => setSearchVisible(!searchVisible)}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Search</Text>
        </CustomTouch>
        {searchVisible && (
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => {
              setFilterText(text);
              applySearchAndFilter(text, isNewFilter);
            }}
            value={filterText}
            placeholder="Search pizza"
          />
        )}
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
      />
      <StatusBar style="auto" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <SafeAreaView style={styles.safeModalView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                activeOpacity={1}
                style={{ alignItems: "flex-start" }}
              >
                <CustomCheckbox
                  isChecked={isNewFilter}
                  onCheck={() => {
                    setIsNewFilter(!isNewFilter);
                    applySearchAndFilter(filterText, !isNewFilter);
                  }}
                />
                <Text style={styles.modalText}>New Items Only</Text>
                <CustomTouch
                  style={styles.buttonStyle}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Close Filter</Text>
                </CustomTouch>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default PizzaList;
