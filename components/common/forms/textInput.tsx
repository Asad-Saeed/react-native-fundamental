import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const TextInputComp = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <View style={styles.display}>
        <Text>My Name is {name}</Text>
        <Text>My Message is {message}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((pre) => !pre)}
          trackColor={{ false: "#767577", true: "#000" }}
          thumbColor="#f4f"
        />
      </View>
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
  display: {
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default TextInputComp;
