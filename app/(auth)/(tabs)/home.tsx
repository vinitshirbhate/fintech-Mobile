import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundBtn";
import DropDownList from "@/components/DropDownList";
import { useBalanceStore } from "@/store/balanceStore";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import WidgetList from "@/components/SortableList/WidgetList";
import { useHeaderHeight } from "@react-navigation/elements";

const home = () => {
  const { balance, clearTransactions, runTransaction, transactions } =
    useBalanceStore();
  const AddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
      title: "Add Money",
    });
  };
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <View style={styles.account}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={styles.currency}>₹</Text>
          <Text style={styles.balance}>{balance()}</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} title={"Add Money"} onPress={AddMoney} />
        <RoundBtn
          icon={"refresh"}
          title={"Exhange"}
          onPress={clearTransactions}
        />
        <RoundBtn icon={"list"} title={"Details"} />
        <DropDownList />
      </View>
      <View style={styles.divider} />
      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transations}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>
            No Transactions
          </Text>
        )}
        {transactions.map((transaction) => (
          <View
            key={transaction.id}
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
            }}
          >
            <View style={styles.circle}>
              <Ionicons
                name={transaction.amount > 0 ? "add" : "remove"}
                size={24}
                color={Colors.dark}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "800" }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {transaction.date.toLocaleString()}
              </Text>
            </View>
            <Text>₹{transaction.amount}</Text>
          </View>
        ))}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  balance: { fontSize: 50, fontWeight: "bold" },
  currency: {
    fontSize: 40,
    marginTop: 10,
    fontWeight: "semibold",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transations: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0", // Light gray color for the divider
    marginVertical: 10,
  },
});
export default home;
