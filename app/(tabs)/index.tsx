import { Image, StyleSheet, ImageBackground, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import logo from "@/assets/images/icon.png";
const logo = require("@/assets/images/icon.png");

export default function HomeScreen() {
  return (
    <ScrollView>
      {/* <ParallaxScrollView
          headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
          headerImage={
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={styles.reactLogo}
            />
          }
    > */}
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
      <ThemedText style={styles.text}>static image</ThemedText>
      <Image source={logo} style={styles.image} />
      <ThemedText style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem
        magni cum, deleniti veritatis porro! Atque tempora temporibus iure,
        facere aspernatur nesciunt deserunt rerum illum, magni velit nemo,
        distinctio veniam consequatur! Quos, libero culpa similique minus
        tempore nostrum eum sit perspiciatis aut accusantium vel in ipsa
        asperiores architecto voluptatum animi a magni expedita inventore
        accusamus optio! Laborum repudiandae adipisci maxime tenetur id facilis
        totam soluta quasi dicta quidem! Adipisci ad consequuntur quis
        dignissimos vitae error debitis? Provident aspernatur iste dolore
        obcaecati laborum ullam quaerat praesentium dolor earum, nemo, quisquam
        excepturi maiores dolorum repudiandae adipisci natus deserunt expedita
        explicabo, rem cupiditate. Natus, iusto. Dolores, fugiat quis autem id
        veniam sequi nostrum enim. Deserunt assumenda necessitatibus, officiis
        temporibus tempora non nesciunt fugit, eum impedit libero ab eius. Ipsum
        sapiente, rem ipsa maiores, fugiat doloribus cupiditate blanditiis,
        labore reprehenderit ab odit libero. Maxime ducimus perferendis, magnam
        dignissimos quas repudiandae similique culpa rerum. Quos magnam numquam
        maxime doloribus voluptates recusandae accusamus et rerum ipsam illum
        possimus suscipit repellendus error, corporis aliquid excepturi odio
        fugiat quia, officiis at. Libero aliquam sunt vitae amet dolore nisi
        nihil necessitatibus laboriosam ipsum architecto. Sequi fugiat cum quasi
        consequuntur. Necessitatibus dolorum nulla aperiam eius aspernatur
        doloribus repellat iste? Nobis.
      </ThemedText>
      {/* </ParallaxScrollView> */}
    </ScrollView>
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
