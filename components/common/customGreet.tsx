import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const CustomGreetComp = ({ name }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {name}</Text>
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text style={styles.text}>Hello {name}</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox]}>
        <Text style={styles.text}>Hello {name}</Text>
      </View>
    </View>
  );
};

export default CustomGreetComp;

// Style Sheet
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "yellow", padding: 60 },
  title: { fontSize: 30, color: "pink" },
  text: { color: "red" },
  // extract styles
  box: {
    width: 100,
    height: 100,
    padding: 10,
    // in array last style have precedence
    backgroundColor: "pink",
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
});
