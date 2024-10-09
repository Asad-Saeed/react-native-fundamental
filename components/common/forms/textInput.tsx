import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const TextInputComp = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter Name"
        // secureTextEntry
        // keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
        multiline
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        onChangeText={setMessage}
        value={message}
        placeholder="Message"
        multiline
      />
      <Text>My Name is {name}</Text>
      <Text>My Message is {message}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: StatusBar.currentHeight,
    padding: 20,
  },
  text: { fontSize: 20, padding: 10 },
  textarea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  input: {
    backgroundColor: "#f3f3f3",
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});
export default TextInputComp;
