import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import Item from "./src/Pages/Home/components/Item";
import CustomTouch from "./src/Pages/Home/components/CustomTouch";
import styles from "./src/styles";
import itemData from "./src/db/db.json";
import CustomCheckbox from "./src/Pages/Home/components/CustomCheckbox";

export default function App() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [isNewFilter, setIsNewFilter] = useState(false);
  const [filteredData, setFilteredData] = useState(itemData.mockItemData);
  const [modalVisible, setModalVisible] = useState(false);

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
}
