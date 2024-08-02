import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundBtn";
import DropDownList from "@/components/DropDownList";

const home = () => {
  const balance = 100;
  const AddMoney = () => {
    console.log("AddMoney");
  };
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
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
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} title={"Add Money"} onPress={AddMoney} />
        <RoundBtn icon={"refresh"} title={"Exhange"} />
        <RoundBtn icon={"list"} title={"Details"} />
        <DropDownList />
      </View>
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
});
export default home;
