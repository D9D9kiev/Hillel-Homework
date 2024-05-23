import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { colors } from "../../common/colors/colors";
import CustomSlider from "./CustomSlider";
import {
  itemsTemplate,
  generateItems,
  generatePromoItems,
} from "../../common/templates/item-card";

export default function CustomModal({ children }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        style={styles.modalWrapper}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          style={styles.touchWrapper}
          onPress={() => setModalVisible(!modalVisible)}
        ></TouchableOpacity>
        <View
          style={[
            styles.centeredViewModal,
            { marginTop: modalVisible ? 0 : 20 },
          ]}
        >
          <View style={styles.modalView}>
            <CustomSlider
              data={generatePromoItems(10)}
              title={"SALE:"}
              showsButtons={true}
            />
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image
          style={styles.buttonOpen}
          source={require("../../../assets/favorite-red.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  touchWrapper: {
    flex: 0.25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: colors["primary-light"],
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: colors["primary-light"],
    backgroundColor: colors["primary-dark-alpha"],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalView: {
    flex: 1,
    backgroundColor: colors["promotion-hot"],

    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    width: 40,
    height: 40,
    color: colors["primary-light"],
    position: "absolute",
    right: -20,
    top: 0,
  },
  buttonOpenText: {
    color: colors["primary-light"],
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    color: colors["primary-light"],
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
