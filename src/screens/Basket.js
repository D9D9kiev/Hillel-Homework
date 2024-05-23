import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../common/colors/colors";
import orderStore from "../store/Order";
import { observer } from "mobx-react";

const BasketScreen = (props) => {
  function onRemoveItem(data) {
    orderStore.removeOrder(data);
  }

  function onConfirm() {
    orderStore.clearAll();
  }

  function ItemsTable() {
    const Table = [
      <View style={styles.itemLine} key={Math.random()}>
        <Text style={styles.titleName} key={Math.random()}>
          Pizza name
        </Text>
        <Text style={styles.titlePrice} key={Math.random()}>
          Price
        </Text>
      </View>,
    ];

    const Items = orderStore.orders.map((order) => {
      return (
        <View style={styles.itemLine} key={order.key}>
          <Text style={styles.name} key={order.id} numberOfLines={3}>
            {order.title} :
          </Text>
          <Text style={styles.price} key={order.id}>
            {order.price}
          </Text>
          <TouchableOpacity
            style={styles.itemButton}
            onPress={() => onRemoveItem(order)}
          >
            <Text style={styles.itemButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      );
    });

    return [...Table, Items];
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={colors["app-background-gradient"]}
        style={styles.container}
      >
        <Text style={styles.title}>SUMMARY ORDER INFO:</Text>
        <ScrollView>
          {orderStore.orders.length ? (
            ItemsTable()
          ) : (
            <View style={styles.noItems}>
              <Text style={styles.noItems} numberOfLines={3}>
                No any items in order. Count: {orderStore.orders.length}
              </Text>
            </View>
          )}
        </ScrollView>
        <Text style={styles.sum}>
          Summ: {orderStore.orders.reduce((sum, curr) => sum + curr.price, 0)}$
        </Text>

        {orderStore.orders.length > 0 && (
          <View style={styles.confirmWrapper}>
            <TouchableOpacity onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default observer(BasketScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["primary-dark"], //colors['app-background'],
  },
  title: {
    width: "100%",
    padding: 14,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#ffffff50",
  },
  itemLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors["primary-light-alpha"],
  },
  titleName: {
    width: "75%",
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
  },
  titlePrice: {
    width: "25%",
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
  },
  name: {
    width: "75%",
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
  },
  price: {
    width: "15%",
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  itemButton: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  noItems: {
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  sum: {
    width: "100%",
    padding: 14,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
    color: "#fff",
    backgroundColor: "#ffffff50",
  },
  confirmWrapper: {
    width: "100%",
    padding: 14,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: colors["promotion-hot"],
  },
  confirmText: {
    fontSize: 30,
    textAlign: "center",
    color: colors["primary-light"],
  },
});
