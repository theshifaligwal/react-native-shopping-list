import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)} >
        <Text style={styles.btnText}>
          <AntDesign name="plus" size={24} color="blue" /> ... Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 7,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 6,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 24,
    textAlign: "center",
  },
});

export default AddItem;
