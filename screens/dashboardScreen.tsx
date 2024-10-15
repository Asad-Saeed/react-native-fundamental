import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Dashboard</Text>
        <Button
          title="Toggle Drawer"
          onPress={() => navigation.toggleDrawer()}
        />
        <Button
          title="Settings"
          onPress={() => navigation.jumpTo("Settings")}
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
export default DashboardScreen;
