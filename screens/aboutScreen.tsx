import React, { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const AboutScreen = ({ navigation, route }) => {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>About {name}</Text>
        <Button
          title="Go to Contact"
          onPress={() => navigation.navigate("Contact")}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home", { name: "Ali Saeed" })}
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
export default AboutScreen;
