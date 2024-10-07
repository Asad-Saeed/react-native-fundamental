import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

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
import DimensionsApi from "@/components/common/dimensionsApi";
import SafeAreaViewComp from "@/components/common/safeAreaView";
import PokemonCardComp from "@/components/common/pokemonCard";
import {
  bulbasaurData,
  charmanderData,
  pikachuData,
  squirtleData,
} from "@/constants/pokemon";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   {/* <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome! Asad Saeed</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView>
    //     <ThemedText style={styles.text}>
    //       Asad is using View and Text components
    //     </ThemedText>
    //   </ThemedView> */}

    //   {/* Image Component */}
    //   {/* <ImageComp /> */}

    //   {/* Text Component */}
    //   {/* <TextComp /> */}

    //   {/* Button Component */}
    //   {/* <ButtonComp /> */}

    //   {/* Modal Component */}
    //   {/* <ModalComp /> */}

    //   {/* Status bar component */}
    //   {/* <StatusBarComp /> */}

    //   {/* Activity Indicator Component */}
    //   {/* <ActivityIndicatorComp /> */}

    //   {/* Alert Component  */}
    //   {/* <AlertComp /> */}

    //   {/* Custom Component */}
    //   {/* <CustomGreetComp name="Asad" /> */}
    //   {/* <CustomGreetComp name="Saeed" /> */}

    //   {/*  Flex Layout /Box components */}
    //   {/* <View style={styles.boxContainer}>
    //     <BoxComp
    //       style={{ backgroundColor: "#8e9b00", alignSelf: "flex-start" }}
    //     >
    //       Box 1
    //     </BoxComp>
    //     <BoxComp style={{ backgroundColor: "#b65d1f", alignSelf: "flex-end" }}>
    //       Box 2
    //     </BoxComp>
    //     <BoxComp
    //       style={{ backgroundColor: "#1c4c56", alignSelf: "flex-start" }}
    //     >
    //       Box 3
    //     </BoxComp>
    //     <BoxComp style={{ backgroundColor: "#ab9156", alignSelf: "stretch" }}>
    //       Box 4
    //     </BoxComp>
    //     <BoxComp
    //       style={{
    //         backgroundColor: "#6b0803",
    //         alignSelf: "auto",
    //         position: "absolute",
    //         top: 10,
    //         right: 20,
    //       }}
    //     >
    //       Box 5
    //     </BoxComp>
    //     <BoxComp
    //       style={{
    //         backgroundColor: "#4e2c00",
    //         flexBasis: 140,
    //         flex: 1,
    //         flexShrink: 1,
    //         flexGrow: 2,
    //       }}
    //     >
    //       Box 6
    //     </BoxComp>
    //     <BoxComp style={{ backgroundColor: "#b95f21", flexGrow: 1 }}>
    //       Box 7
    //     </BoxComp>
    //   </View> */}

    //   {/* Dimension Api Component */}
    //   {/* <DimensionsApi /> */}

    //   {/* Safe Area View Comp */}
    //   {/* <SafeAreaViewComp /> */}
    //  </ParallaxScrollView>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCardComp {...bulbasaurData} />
        <PokemonCardComp {...charmanderData} />
        <PokemonCardComp {...pikachuData} />
        <PokemonCardComp {...squirtleData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
//   text: {
//     fontSize: 22,
//     color: "white",
//   },
//   image: {
//     height: 100,
//     width: 200,
//   },
//   boxContainer: {
//     // flex: 1,
//     height: 400,
//     // flexDirection: "column-reverse",
//     // justifyContent: "space-evenly",
//     // alignItems: "flex-end",
//     // alignContent: "stretch",
//     flexWrap: "wrap",
//     gap: 8,
//     // rowGap: 40,
//     // columnGap: 40,
//     // overflow: "scroll",
//     // marginTop: 64,
//     borderWidth: 6,
//     borderColor: "red",
//     position: "relative",
//     top: 20,
//     left: 20,
//   },
// });
