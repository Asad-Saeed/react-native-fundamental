import { Image, StyleSheet, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ButtonComp from "@/components/common/button";
import ImageComp from "@/components/common/image";
import TextComp from "@/components/common/text";
import ModalComp from "@/components/common/modal";
import StatusBarComp from "@/components/common/statusbar";
import ActivityIndicatorComp from "@/components/common/activityIdicator";
import AlertComp from "@/components/common/alert";
import CustomGreetComp from "@/components/common/customGreet";
import BoxComp from "@/components/common/flexLayout";

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
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! Asad Saeed</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.text}>
          Asad is using View and Text components
        </ThemedText>
      </ThemedView> */}

      {/* Image Component */}
      {/* <ImageComp /> */}

      {/* Text Component */}
      {/* <TextComp /> */}

      {/* Button Component */}
      {/* <ButtonComp /> */}

      {/* Modal Component */}
      {/* <ModalComp /> */}

      {/* Status bar component */}
      {/* <StatusBarComp /> */}

      {/* Activity Indicator Component */}
      {/* <ActivityIndicatorComp /> */}

      {/* Alert Component  */}
      {/* <AlertComp /> */}

      {/* Custom Component */}
      {/* <CustomGreetComp name="Asad" /> */}
      {/* <CustomGreetComp name="Saeed" /> */}

      {/*  Flex Layout /Box components */}
      <View style={styles.boxContainer}>
        <BoxComp style={{ backgroundColor: "#8e9b00" }}>Box 1</BoxComp>
        <BoxComp style={{ backgroundColor: "#b65d1f" }}>Box 2</BoxComp>
        <BoxComp style={{ backgroundColor: "#1c4c56" }}>Box 3</BoxComp>
        <BoxComp style={{ backgroundColor: "#ab9156" }}>Box 4</BoxComp>
        <BoxComp style={{ backgroundColor: "#6b0803" }}>Box 5</BoxComp>
        <BoxComp style={{ backgroundColor: "#4e2c00" }}>Box 6</BoxComp>
        <BoxComp style={{ backgroundColor: "#b95f21" }}>Box 7</BoxComp>
      </View>
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
  boxContainer: { marginTop: 64, borderWidth: 6, borderColor: "red" },
});
