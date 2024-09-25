import { Image, StyleSheet, ImageBackground } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import logo from "@/assets/images/icon.png";
const logo = require("@/assets/images/icon.png");

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! Asad Saeed</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>
          Asad is using View and Text components
        </ThemedText>
      </ThemedView>
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
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
