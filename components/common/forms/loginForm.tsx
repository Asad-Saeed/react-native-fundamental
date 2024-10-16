import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Alert,
} from "react-native";

const LoginFormComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    let errors = { username: "", password: "" };
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return !errors.username && !errors.password;
  };

  const HandleSubmit = () => {
    console.log("submit");
    if (validateForm()) {
      Alert.alert(`You submit username ${username} and password ${password}`);
      setUsername("");
      setPassword("");
      setErrors({ username: "", password: "" });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user name"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username && <Text style={styles.error}>{errors.username}</Text>}
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        <Button color="#61DAFB" title="Login" onPress={HandleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: { fontSize: 16, marginBottom: 8, fontWeight: "bold" },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "red",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
export default LoginFormComp;
