// import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";

const DimensionsApi = () => {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });
  // useLayoutEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return () => subscription.remove();
  // }, []);
  // const { window } = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  console.log("Dimensions", { windowHeight, windowWidth });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        {/* <Text style={styles.text}>Welcome</Text> */}
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
      </View>
    </View>
  );
};

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
// console.log("Dimensions", { windowHeight, windowWidth });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: { fontSize: windowWidth > 300 ? 50 : 20 },
});
export default DimensionsApi;
