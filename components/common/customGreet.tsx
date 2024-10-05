import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const CustomGreetComp = ({ name }: any) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>Hello {name}</Text>
      <View style={[styles.box, styles.lightBlueBox, styles.boxShadow]}>
        <Text style={styles.text}>Hello {name}</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox, styles.adroidShadow]}>
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
    width: 200,
    height: 200,
    // padding: 10,
    // in array last style have precedence
    backgroundColor: "pink",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
  // on applied like this in IOS not in andriod we need to use elevation for andriod
  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  adroidShadow: {
    elevation: 10,
    shadowColor: "red",
  },
});
