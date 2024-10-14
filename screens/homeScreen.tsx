import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Navigation prop just use for screen components for other components we need to use useNavigation hook
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Home Screen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 20 },
});
export default HomeScreen;
