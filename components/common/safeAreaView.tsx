import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";

// SafeAreaView is used to show text even device have notch or camera or rounded corners on screen
const SafeAreaViewComp = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 10 : 20,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    ...Platform.select({
      ios: {
        color: "white",
        fontSize: 20,
      },
      android: {
        color: "yellow",
        fontSize: 30,
      },
    }),
  },
});
export default SafeAreaViewComp;
