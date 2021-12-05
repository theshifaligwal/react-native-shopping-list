import { StatusBar } from "expo-status-bar";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <AntDesign name="close" size={24} color="red" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
