import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ButtonComp from "@/components/common/button";
import ImageComp from "@/components/common/image";
import TextComp from "@/components/common/text";
import ModalComp from "@/components/common/modal";
import StatusBarComp from "@/components/common/statusbar";

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

      {/* Image Component */}
      <ImageComp />

      {/* Text Component */}
      <TextComp />

      {/* Button Component */}
      <ButtonComp />

      {/* Modal Component */}
      <ModalComp />

      {/* Status bar component */}
      <StatusBarComp />
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
