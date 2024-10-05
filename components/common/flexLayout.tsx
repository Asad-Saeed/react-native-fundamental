import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxComp = ({ children, style }) => {
  return (
    <View style={[styles.box, style]}>
      {/* <Text>Flex Layout</Text> */}
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { backgroundColor: "white", padding: 20 },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
export default BoxComp;
