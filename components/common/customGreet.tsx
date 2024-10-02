import React from "react";
import { Text, View } from "react-native";

const CustomGreetComp = ({ name }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default CustomGreetComp;
