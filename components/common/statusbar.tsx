import React from "react";
import { StatusBar, Text, View } from "react-native";

const StatusBarComp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "lighblue", padding: 60 }}>
      <StatusBar
        backgroundColor="green"
        barStyle="default"
        //   hidden={true}
      />
    </View>
  );
};

export default StatusBarComp;
