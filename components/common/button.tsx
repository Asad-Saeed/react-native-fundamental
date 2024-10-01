import React from "react";
import { Button, Image, Pressable } from "react-native";
const logo = require("@/assets/images/icon.png");

const ButtonComp = () => {
  return (
    <>
      <Button
        title="Simple"
        onPress={() => {
          console.log("button pressed");
        }}
        color="midnightblue"
        //   disabled={true}
        accessibilityLabel="Learn more about this purple button"
      />
      {/* Pressable */}
      <Pressable
        onPress={() => console.log("pressable button")}
        onPressIn={() => console.log("onPressIn")}
        onPressOut={() => console.log("onPressOut")}
        onLongPress={() => console.log("long pres")}
      >
        <Image source={logo} style={{ height: 200, width: 200 }} />
      </Pressable>
    </>
  );
};

export default ButtonComp;
