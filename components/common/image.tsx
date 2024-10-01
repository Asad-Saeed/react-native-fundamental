import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Image, StyleSheet, ImageBackground } from "react-native";

// import logo from "@/assets/images/icon.png";
const logo = require("@/assets/images/icon.png");

const ImageComp = () => {
  return (
    <ThemedView style={styles.stepContainer}>
      {/* static image */}
      <ThemedText style={styles.text}>static image</ThemedText>
      <Image source={logo} style={styles.image} />
      {/* network image */}
      <ThemedText style={styles.text}>network image</ThemedText>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image}
      />
      {/* background image */}
      <ThemedText style={styles.text}>background image</ThemedText>
      <ImageBackground source={logo} style={{ flex: 1 }}>
        <ThemedText
          style={{
            color: "blue",
            fontSize: 30,
            display: "flex",
            padding: "auto",
          }}
        >
          Hello World
        </ThemedText>
      </ImageBackground>
    </ThemedView>
  );
};

export default ImageComp;

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 22,
    color: "white",
  },
  image: {
    height: 100,
    width: 200,
  },
});
